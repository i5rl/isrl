"use client";

import { useState, useCallback } from "react";
import { FormError, FormState } from "@/types";

interface UseFormOptions<T> {
  initialData: T;
  validationSchema?: (data: T) => FormError;
}

export function useForm<T extends Record<string, any>>({
  initialData,
  validationSchema,
}: UseFormOptions<T>) {
  const [state, setState] = useState<FormState<T>>({
    data: initialData,
    errors: {},
    isLoading: false,
    isSubmitted: false,
  });

  const setData = useCallback(
    (data: Partial<T>) => {
      setState((prev) => ({
        ...prev,
        data: { ...prev.data, ...data },
        errors:
          prev.isSubmitted && validationSchema
            ? validationSchema({ ...prev.data, ...data })
            : prev.errors,
      }));
    },
    [validationSchema],
  );

  const setFieldValue = useCallback(
    (field: keyof T, value: T[keyof T]) => {
      setData({ [field]: value } as Partial<T>);
    },
    [setData],
  );

  const setLoading = useCallback((isLoading: boolean) => {
    setState((prev) => ({ ...prev, isLoading }));
  }, []);

  const setErrors = useCallback((errors: FormError) => {
    setState((prev) => ({ ...prev, errors }));
  }, []);

  const validate = useCallback((): boolean => {
    if (!validationSchema) return true;

    const errors = validationSchema(state.data);
    setState((prev) => ({
      ...prev,
      errors,
      isSubmitted: true,
    }));

    return Object.keys(errors).length === 0;
  }, [state.data, validationSchema]);

  const reset = useCallback(() => {
    setState({
      data: initialData,
      errors: {},
      isLoading: false,
      isSubmitted: false,
    });
  }, [initialData]);

  const handleSubmit = useCallback(
    async (onSubmit: (data: T) => Promise<void> | void) => {
      setState((prev) => ({ ...prev, isLoading: true, isSubmitted: true }));

      try {
        if (validate()) {
          await onSubmit(state.data);
        }
      } catch (error) {
        console.error("Form submission error:", error);
        setErrors({ message: "An error occurred while submitting the form" });
      } finally {
        setLoading(false);
      }
    },
    [state.data, validate],
  );

  return {
    ...state,
    setData,
    setFieldValue,
    setLoading,
    setErrors,
    validate,
    reset,
    handleSubmit,
    hasErrors: Object.keys(state.errors).length > 0,
    getFieldError: (field: string) => state.errors[field],
  };
}
