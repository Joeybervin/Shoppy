useEffect(async () => {
  const res = await fetch("https://api.com/api/v1");
  const json = await res.json();
  setData(json);
}, []);