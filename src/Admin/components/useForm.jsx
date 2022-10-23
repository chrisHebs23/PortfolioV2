export const useForm = () => {
  const validation = (values) => {
    const error = {};

    if (!values.title) {
      error.title = `Please do not leave blank`;
    }
    if (!values.imageUrl) {
      error.imageUrl = `Please do not leave blank`;
    }
    if (!values.description) {
      error.description = `Please do not leave blank`;
    }
    if (!values.category) {
      error.category = `Please do not leave blank`;
    }
    if (!values.websiteUrl) {
      error.websiteUrl = `Please do not leave blank`;
    }

    return error;
  };

  return { validation };
};
