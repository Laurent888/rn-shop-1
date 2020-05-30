const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("John");
  }, 1000);
});

const getName = async () => {
  const data = await promise;

  return data;
};

async function Hello() {
  const name = await getName();

  console.log(name);
}

Hello();
