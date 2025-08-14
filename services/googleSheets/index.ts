export interface TGoogleSheetsResponse {
  result: 'success' | 'error';
  msg: string;
}

type TGoogleSheetsAction = 'append' | 'updateVerificationCode';

const googleSheetsService = async <T extends { phone: string }>(
  data: T,
  action: TGoogleSheetsAction
): Promise<TGoogleSheetsResponse> => {
  const scriptUrl = process.env.NEXT_PUBLIC_API;

  if (!scriptUrl) {
    console.error('Google Script URL not configured');
    return {
      result: 'error',
      msg: 'Google Sheets integration not configured',
    };
  }

  try {
    const formData = {
      ...data,
      action,
      phone: data.phone.replace(/\s/g, ''),
      token: process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_TOKEN,
      timestamp: new Date().toISOString(),
    };

    const response = await fetch(scriptUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result: TGoogleSheetsResponse = await response.json();

    return result;
  } catch (error) {
    console.error('Error submitting to Google Sheets:', error);
    return {
      result: 'error',
      msg: 'Failed to submit data to Google Sheets',
    };
  }
};

export default googleSheetsService;
