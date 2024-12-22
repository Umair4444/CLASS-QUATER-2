import Link from "next/link";
export default async function Home() {
  // to get data from this url help get api
  const url = await fetch("https://simple-books-api.glitch.me/books/", {
    method: "GET",
  });
  const res = await url.json();
  // console.log(res);
  return (
    <>
      <div className="">
        <h1 className="text-center text-4xl">Books List</h1>
        <ul className="shadow-xl text-center">
          {res.map((book: any, index: number) => (
            <li
              key={book.id}
              className={`py-3 container m-auto my-1 shadow-2xl ${
                index % 2 === 0 ? "bg-red-500" : "bg-green-500"
              }`}
            >
              <Link href={`${book.id}`}>
                <h1 className={`text-white`}>{book.name}</h1>
              </Link>
              <h1>{book.type}</h1>
              <h1>{book.availability}</h1>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
