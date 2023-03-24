import React from "react";
import { AiOutlineUser, AiFillStar, AiOutlineStar } from "react-icons/ai";
import { useUsersContext } from "../context/user_context";

const SingleUserSummary = ({ amountInThousand }) => {
  const { single_user: product } = useUsersContext();

  return (
    product && (
      <section className="shadow-lg h-[14rem] rounded-sm capitalize px-6 border">
        <div className="h-4/6 flex items-center text-lendsqr1">
          <main className="flex items-center gap-5">
            <img
              src={product.profile.avatar}
              alt="profilePic"
              className="rounded-full p-6"
            />
            {/* <AiOutlineUser className="text-9xl bg-gray-300 rounded-full p-6" /> */}
            <div>
              <h2 className="font-semibold text-3xl pb-2 capitalize">
                {product.profile.firstName} {product.profile.lastName}
              </h2>
              <p className="text-md">LSQFf587g90</p>
            </div>
          </main>
          <article className="px-8 mx-8 border-2 border-transparent border-x-gray-300 ">
            <h2 className="text-lg font-medium pb-2">User’s Tier</h2>
            <div className="text-[#E9B200] flex text-2xl">
              <AiFillStar />
              <AiOutlineStar />
              <AiOutlineStar />
            </div>
          </article>
          <article>
            <h2 className="pb-2 font-semibold text-3xl pb-2">
              ₦{amountInThousand(product.accountBalance)}
            </h2>
            <p className="text-md">{product.accountNumber}/Providus Bank</p>
          </article>
        </div>
        <div className="h-2/6 flex text-md justify-between items-end pb-1">
          <p>General details</p>
          <p>documents</p>
          <p>bank details</p>
          <p>loan</p>
          <p>savings</p>
          <p>app and system</p>
        </div>
      </section>
    )
  );
};

export default SingleUserSummary;
