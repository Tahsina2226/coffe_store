import React from "react";

const AddCoffee = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;

    // Accessing form field values
    const name = form.name.value;
    const chef = form.chef.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;

 
    const newCoffee = { name, chef, supplier, taste, category, details, photo };
    console.log(newCoffee);

    App.post('/coffe', async(req,res) =>{
        const newCoffe=req.body;
        console.log();
    })

    
  };

  return (
    <div className="flex flex-col justify-center items-center bg-gradient-to-b from-[#e6dace] to-[#cdbba7] min-h-screen">
      <div className="bg-[#f7ede2] shadow-lg p-8 rounded-xl w-full max-w-4xl">
        <h1 className="mb-6 font-extrabold text-[#6b4226] text-3xl text-center">
          Add New Coffee
        </h1>
        <p className="mb-10 text-[#5a3b27] text-center leading-relaxed">
          Add details about your favorite coffee to keep track of the amazing
          flavors and experiences it offers. Let's make your coffee collection
          memorable!
        </p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="gap-6 grid grid-cols-1 sm:grid-cols-2">
            <div>
              <label
                htmlFor="name"
                className="block font-semibold text-[#6b4226] text-sm"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter coffee name"
                className="border-[#c69c6d] bg-white shadow-sm mt-2 p-3 border rounded-lg focus:ring-2 focus:ring-[#8d6346] w-full focus:outline-none"
              />
            </div>
            <div>
              <label
                htmlFor="chef"
                className="block font-semibold text-[#6b4226] text-sm"
              >
                Chef
              </label>
              <input
                type="text"
                id="chef"
                name="chef"
                placeholder="Enter coffee chef"
                className="border-[#c69c6d] bg-white shadow-sm mt-2 p-3 border rounded-lg focus:ring-2 focus:ring-[#8d6346] w-full focus:outline-none"
              />
            </div>
            <div>
              <label
                htmlFor="supplier"
                className="block font-semibold text-[#6b4226] text-sm"
              >
                Supplier
              </label>
              <input
                type="text"
                id="supplier"
                name="supplier"
                placeholder="Enter coffee supplier"
                className="border-[#c69c6d] bg-white shadow-sm mt-2 p-3 border rounded-lg focus:ring-2 focus:ring-[#8d6346] w-full focus:outline-none"
              />
            </div>
            <div>
              <label
                htmlFor="taste"
                className="block font-semibold text-[#6b4226] text-sm"
              >
                Taste
              </label>
              <input
                type="text"
                id="taste"
                name="taste"
                placeholder="Enter coffee taste"
                className="border-[#c69c6d] bg-white shadow-sm mt-2 p-3 border rounded-lg focus:ring-2 focus:ring-[#8d6346] w-full focus:outline-none"
              />
            </div>
            <div>
              <label
                htmlFor="category"
                className="block font-semibold text-[#6b4226] text-sm"
              >
                Category
              </label>
              <input
                type="text"
                id="category"
                name="category"
                placeholder="Enter coffee category"
                className="border-[#c69c6d] bg-white shadow-sm mt-2 p-3 border rounded-lg focus:ring-2 focus:ring-[#8d6346] w-full focus:outline-none"
              />
            </div>
            <div>
              <label
                htmlFor="details"
                className="block font-semibold text-[#6b4226] text-sm"
              >
                Details
              </label>
              <textarea
                id="details"
                name="details"
                placeholder="Enter coffee details"
                className="border-[#c69c6d] bg-white shadow-sm mt-2 p-3 border rounded-lg focus:ring-2 focus:ring-[#8d6346] w-full focus:outline-none resize-none"
                rows="3"
              ></textarea>
            </div>
          </div>
          <div>
            <label
              htmlFor="photo"
              className="block font-semibold text-[#6b4226] text-sm"
            >
              Photo
            </label>
            <input
              type="text"
              id="photo"
              name="photo"
              placeholder="Enter photo URL"
              className="border-[#c69c6d] bg-white shadow-sm mt-2 p-3 border rounded-lg focus:ring-2 focus:ring-[#8d6346] w-full focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="bg-gradient-to-r from-[#8d6346] to-[#6b4226] shadow-lg hover:shadow-xl mt-6 py-3 rounded-lg focus:ring-4 focus:ring-[#b07e5e] w-full text-white hover:scale-105 transform transition duration-200 focus:outline-none"
          >
            Add Coffee
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddCoffee;
