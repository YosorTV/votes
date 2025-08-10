import { FORM_SPREE_URL } from '@/lib/constants/system';
import { TContactFormData, TContactFormResponse } from '@/lib/interfaces/forms/contactForm.types';

const contactService = async (data: TContactFormData): Promise<TContactFormResponse> => {
  try {
    const response = await fetch(FORM_SPREE_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: `${data.firstName} ${data.lastName}`,
        phone: data.phone,
        _replyto: data.email,
        _subject: 'New contact form submission',
        message: data.message,
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to send message');
    }

    return {
      success: true,
      message: 'Message sent successfully',
    };
  } catch (error) {
    console.error(error);

    return {
      success: false,
      message: 'Failed to send message',
    };
  }
};

export default contactService;
