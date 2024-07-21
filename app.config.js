export default ({ config }) => {
  return {
    ...config,
    extra: {
      ...config.extra,
      eas: {
        projectId: '9d0829c2-1db7-4fb9-9801-7589490f29af',
      },
      apiUrl: process.env.EXPO_PUBLIC_API_URL,
      apiKey: process.env.EXPO_PUBLIC_API_KEY,
    },
  };
};
