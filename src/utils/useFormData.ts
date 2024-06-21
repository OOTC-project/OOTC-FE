import React, { useState } from 'react';

const useFormData = <T extends Record<string, any>>(INITDATA: T) => {
  const [formData, setFormData] = useState<T>(INITDATA);

  const handleChange = (value: string, name: string) => {
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleChangeSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target;

    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleChangeBoolean = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;

    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: checked,
    }));
  };

  const handleReset = () => {
    setFormData(INITDATA);
  };

  const [on, setOn] = useState(false);
  const handleSearchClick = () => {
    setOn(prev => !prev);
  };

  return {
    formData,
    setFormData,
    on,
    handleChange,
    handleChangeSelect,
    handleReset,
    handleSearchClick,
    handleChangeBoolean,
  };
};

export default useFormData;
