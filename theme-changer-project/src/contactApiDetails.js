const contactDetails = async () => {
  const data = await fetch("http://localhost:5000/contactDetails");
  return data.json();
};

export default contactDetails;
