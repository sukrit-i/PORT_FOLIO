import { useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';
import type { ContactFormData } from '../types';
import { sendContactMessage } from '../services/api';
import type { ApiResponse } from '../services/api';

export const useContactForm = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [loading, setLoading] = useState<boolean>(false);
  const [responseStatus, setResponseStatus] = useState<ApiResponse | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters.';
    }
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please provide a valid email address.';
    }
    if (!formData.subject.trim() || formData.subject.trim().length < 3) {
      newErrors.subject = 'Subject must be at least 3 characters.';
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setResponseStatus(null);

    if (!validate()) return;

    setLoading(true);
    const result = await sendContactMessage(formData);
    setLoading(false);
    setResponseStatus(result);

    if (result.success) {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setErrors({});
    }
  };

  return {
    formData,
    loading,
    responseStatus,
    errors,
    handleChange,
    handleSubmit,
    resetForm: () => setResponseStatus(null),
  };
};
