export const jobsLoader = async () => {
  const response = await fetch("http://localhost:5001/jobs");
  return response.json();
};
