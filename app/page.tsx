import CustomNavbar from "./components/Navbar";

export default function Home() {
  return (
    <>
      <CustomNavbar />
      <h1 className="font-bold text-2xl w-full bg-gray-950">Projects</h1>
      <br />

      <div className="flex gap-4 p-4">
        <div className="flex container w-52 h-28 bg-gray-950 p-4 text-center rounded-md gap-4">
          <p className="m-auto font-medium">Create New Project</p>
        </div>
        <div className="flex-col container w-52 h-28 bg-gray-950 p-2 rounded-md">
          <p className="font-bold overflow-hidden">Title</p>
          <p className="font-medium line-clamp-3">Description</p>
          <p className="mt-6 align-bottom text-gray-700">
            Created <span className="font-medium">3 days ago</span>
          </p>
        </div>
      </div>
    </>
  );
}
