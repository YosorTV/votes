import { TVerificationFormData, TVerificationFormResponse } from '@/lib/interfaces/forms/verificationForm.types';

import { TGoogleSheetsResponse } from '../googleSheets';

const googleSheetsVerificationService = async (data: TVerificationFormData): Promise<TVerificationFormResponse> => {
  const scriptUrl = process.env.NEXT_PUBLIC_API_VERIFICATION;

  if (!scriptUrl) {
    console.error('Google Script Verification URL not configured');

    return {
      result: 'error',
      msg: 'Google Sheets verificationCode integration not configured',
    };
  }

  try {
    const payload = {
      ...data,
      token: process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_TOKEN,
    };

    const response = await fetch(scriptUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result: TGoogleSheetsResponse = await response.json();

    return result;
  } catch (error) {
    console.error('Error submitting verificationCode to Google Sheets:', error);
    return {
      result: 'error',
      msg: 'Failed to submit verificationCode code to Google Sheets',
    };
  }
};

export default googleSheetsVerificationService;
