import Navbar from "./Navbar";

const Home = () => {
  return (
    <div className="content-container">
      <Navbar />
      <div className="content-list">
        <table className="table mt-10 w-full text-stone-900">
          <thead className="bg-gray-500 border-b-2 border-gray-200">
            <tr>
              <th className="p-2 text-xl font-semibold tracking-wide ">#</th>
              <th className="p-2 text-xl font-semibold tracking-wide ">code</th>
              <th className="p-2 text-xl font-semibold tracking-wide ">Name</th>
              <th className="p-2 text-xl font-semibold tracking-wide ">Size</th>

              <th className="p-2 text-xl font-semibold tracking-wide ">
                Price
              </th>
              <th className="p-2 text-xl font-semibold tracking-wide ">Date</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-gray-400 border-b-2 border-gray-200">
              <td className="p-2 text-xl text-stone-700 text-center">1</td>
              <td className="p-2 text-lg text-stone-700 text-center">
                219487298413223
              </td>
              <td className="p-2 text-lg text-stone-700 text-center">
                sample 1
              </td>
              <td className="p-2 text-lg text-stone-700 text-center">M</td>
              <td className="p-2 text-lg text-stone-700 text-center">20$</td>
              <td className="p-2 text-lg text-stone-700 text-center">
                2022/12/30
              </td>
            </tr>
            <tr className="bg-gray-500 border-b-2 border-gray-200">
              <td className="p-2 text-lg text-stone-900 text-center">1</td>
              <td className="p-2 text-lg text-stone-900 text-center">
                219487298413223
              </td>
              <td className="p-2 text-lg text-stone-900 text-center">
                sample 1
              </td>
              <td className="p-2 text-lg text-stone-900 text-center">M</td>
              <td className="p-2 text-lg text-stone-900 text-center">20$</td>
              <td className="p-2 text-lg text-stone-900 text-center">
                2022/12/30
              </td>
            </tr>
            <tr className="bg-gray-400 border-b-2 border-gray-200">
              <td className="p-2 text-lg text-stone-700 text-center">1</td>
              <td className="p-2 text-lg text-stone-700 text-center">
                219487298413223
              </td>
              <td className="p-2 text-lg text-stone-700 text-center">
                sample 1
              </td>
              <td className="p-2 text-lg text-stone-700 text-center">M</td>
              <td className="p-2 text-lg text-stone-700 text-center">20$</td>
              <td className="p-2 text-lg text-stone-700 text-center">
                2022/12/30
              </td>
            </tr>
            <tr className="bg-gray-500 border-b-2 border-gray-200">
              <td className="p-2 text-lg text-stone-900 text-center">1</td>
              <td className="p-2 text-lg text-stone-900 text-center">
                219487298413223
              </td>
              <td className="p-2 text-lg text-stone-900 text-center">
                sample 1
              </td>
              <td className="p-2 text-lg text-stone-900 text-center">M</td>
              <td className="p-2 text-lg text-stone-900 text-center">20$</td>
              <td className="p-2 text-lg text-stone-900 text-center">
                2022/12/30
              </td>
            </tr>
            <tr className="bg-gray-400 border-b-2 border-gray-200">
              <td className="p-2 text-lg text-stone-700 text-center">1</td>
              <td className="p-2 text-lg text-stone-700 text-center">
                219487298413223
              </td>
              <td className="p-2 text-lg text-stone-700 text-center">
                sample 1
              </td>
              <td className="p-2 text-lg text-stone-700 text-center">M</td>
              <td className="p-2 text-lg text-stone-700 text-center">20$</td>
              <td className="p-2 text-lg text-stone-700 text-center">
                2022/12/30
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
