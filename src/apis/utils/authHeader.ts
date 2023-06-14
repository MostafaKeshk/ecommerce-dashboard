const authHeader = (token?: any) => {
  const t = token || JSON.parse(localStorage.getItem("smart1-token") as any);
  if (t) {
    return {
      Authorization: `Bearer ${t}`,
    };
  }
};

export default authHeader;
