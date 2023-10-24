import { type ChangeEvent, type FormEvent, useState } from "react";

export default function useForm<T>(initialState: T) {
  const [data, setData] = useState<T>(initialState);

  const handleChange = (e: ChangeEvent<any>) => {
    setData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (callback: (data: T) => void) => {
    return (e: FormEvent) => {
      e.preventDefault();
      return callback(data);
    };
  };

  const resetForm = () => {
    setData(initialState);
  };

  return {
    data,
    handleChange,
    handleSubmit,
    resetForm,
  };
}
