//components\EditProductForm.jsx
import Link from "next/link";
import RemoveBtn from "./RemoveBtn";
import Image from "next/image";

const getProducts = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/products", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch products");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading products: ", error);
  }
};

export default async function ProductList() {
  const { products } = await getProducts();

  return (
    <div className="shadow-lg p-3 mb-5 bg-body rounded">
      <div className="overflow-x-auto">
        <div className="flex justify-center items-center">
          <h1 className="font-bold py-10 text-2xl">
            การติดตามและประเมินผลยุทธศาสตร์ชาติ 20 ปี
          </h1>
        </div>
        <div className="text-right">
          <Link className="btn btn-primary" href={"/addProduct"}>
            Add Product
          </Link>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>ยุทธศาสตร์ชาติ</th>
              <th>โครงการ</th>
              <th>หน่วยงานที่นำนโยบายไปปฏิบัติ</th>
              <th>อีเมล</th>
              <th>โทรศัพท์</th>
              <th>งบประมาณ (ล้านบาท)</th>
              <th>ปีงบประมาณ</th>
              <th>ผลประเมิน</th>
              <th>จุดอ่อน</th>
              <th>จุดแข็ง</th>
              <th>แนวทางเสริมจุดแข็ง</th>
              <th>ข้อเสนอแนะ</th>
              <th>Edit & Delete</th>
            </tr>
          </thead>
          <tbody>
            {products.map((element) => (
              <tr className="hover" key={element._id}>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <Image
                          src={element.image}
                          alt={element.name}
                          width={80}
                          height={80}
                          className="rounded-lg"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{element.name}</div>
                    </div>
                  </div>
                </td>

                <td>{element.implementation}</td>
                <td>{element.email}</td>
                <td>{element.mobile}</td>
                <td>{element.budget}</td>
                <td>{element.year}</td>
                <td>{element.evaluation}</td>
                <td>{element.weak}</td>
                <td>{element.strength}</td>
                <td>{element.development}</td>
                <td>{element.suggestion}</td>
                {/* <td></td> */}
                <th>
                  <Link href={`/editProduct/${element._id}`}>
                    <button className="btn btn-primary">Edit</button>
                  </Link>
                  <RemoveBtn id={element._id} />
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
