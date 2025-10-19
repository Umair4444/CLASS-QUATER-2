import Form from "./components/Form";

type Shopping = {
  product: string;
  price: string | number;
};

export default async function Home() {

  const url = await fetch(`http://localhost:3001/api/hello`, {
    cache: "no-store",
  });

  const res = await url.json();
  
  console.log("from page", res);

  return (
    <div>
      <h1> Route Handlers </h1>
      {res.ShoppingList.map((item: Shopping) => (
        <div key={item.price}>
          {item.product}
          <br />
          {item.price}
        </div>
      ))}

      <Form />
    </div>
  );
}
