export const jobsLoader = async () => {
  const response = await fetch("http://localhost:5000/jobs");
  return response.json();
};
