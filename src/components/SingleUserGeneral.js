import React from "react";
import { useUsersContext } from "../context/user_context";

const SingleUserGeneral = ({
  amountInThousand,
  phoneConstruct,
  emailAddress,
}) => {
  const { single_user: product } = useUsersContext();
  return (
    product && (
      <div className="shadow-lg mt-6 text-lendsqr1 px-6 border rounded-sm">
        <section className="py-6 border border-transparent border-b-gray-300">
          <h1 className="font-medium text-lg">Personal Information</h1>
          <div className="grid grid-cols-5 gap-y-6 mt-6">
            <div>
              <h1 className="uppercase text-md ">full name</h1>
              <p className="capitalize font-medium text-lg opacity-80">
                {product.profile.firstName} {product.profile.lastName}
              </p>
            </div>
            <div>
              <h1 className="uppercase text-md ">phone Number</h1>
              <p className="capitalize font-medium text-lg opacity-80">
                {phoneConstruct(product.profile.phoneNumber)}
              </p>
            </div>
            <div>
              <h1 className="uppercase text-md ">email address</h1>
              <p className="font-medium text-md opacity-80 lowercase">
                {emailAddress(product.email)}
              </p>
            </div>
            <div>
              <h1 className="uppercase text-md ">bvn</h1>
              <p className="capitalize font-medium text-lg opacity-80">
                {product.profile.bvn}
              </p>
            </div>
            <div>
              <h1 className="uppercase text-md ">gender</h1>
              <p className="capitalize font-medium text-lg opacity-80">
                {product.profile.gender}
              </p>
            </div>
            <div>
              <h1 className="uppercase text-md ">marital status</h1>
              <p className="capitalize font-medium text-lg opacity-80">
                single
              </p>
            </div>
            <div>
              <h1 className="uppercase text-md ">children</h1>
              <p className="capitalize font-medium text-lg opacity-80">none</p>
            </div>
            <div>
              <h1 className="uppercase text-md ">type of residence</h1>
              <p className="capitalize font-medium text-lg opacity-80">
                parent's apartment
              </p>
            </div>
          </div>
        </section>
        <section className="py-6 border border-transparent border-b-gray-300">
          <h1 className="font-medium text-lg">Education and Employment</h1>
          <div className="grid grid-cols-5 gap-y-6 mt-6">
            <div>
              <h1 className="uppercase text-md ">level of Education</h1>
              <p className="capitalize font-medium text-lg opacity-80">
                {product.education.level}
              </p>
            </div>
            <div>
              <h1 className="uppercase text-md ">Employment status</h1>
              <p className="capitalize font-medium text-lg opacity-80">
                {product.education.employmentStatus}
              </p>
            </div>
            <div>
              <h1 className="uppercase text-md ">sector of employment</h1>
              <p className="capitalize font-medium text-lg opacity-80">
                {product.education.sector}
              </p>
            </div>
            <div>
              <h1 className="uppercase text-md ">office email</h1>
              <p className="font-medium text-lg opacity-80 lowercase">
                {emailAddress(product.education.officeEmail)}
              </p>
            </div>
            <div>
              <h1 className="uppercase text-md ">monthly income</h1>
              <p className="capitalize font-medium text-lg opacity-80">
                ₦{amountInThousand(product.education.monthlyIncome[0])} - ₦
                {amountInThousand(product.education.monthlyIncome[1])}
              </p>
            </div>
            <div>
              <h1 className="uppercase text-md ">loan repayment</h1>
              <p className="capitalize font-medium text-lg opacity-80">
                {amountInThousand(product.education.loanRepayment)}
              </p>
            </div>
          </div>
        </section>
        <section className="py-6 border border-transparent border-b-gray-300">
          <h1 className="font-medium text-lg">Socials</h1>
          <div className="grid grid-cols-5 gap-y-6 mt-6">
            <div>
              <h1 className="uppercase text-md ">twitter</h1>
              <p className="font-medium text-lg opacity-80">
                {product.socials.twitter}
              </p>
            </div>
            <div>
              <h1 className="uppercase text-md ">facebook</h1>
              <p className="capitalize font-medium text-lg opacity-80">
                {product.socials.facebook}
              </p>
            </div>
            <div>
              <h1 className="uppercase text-md ">instagram</h1>
              <p className="font-medium text-lg opacity-80">
                {product.socials.instagram}
              </p>
            </div>
          </div>
        </section>
        <section className="py-6 border border-transparent border-b-gray-300">
          <h1 className="font-medium text-lg">Guarantor</h1>
          <div className="grid grid-cols-5 gap-y-6 mt-6">
            <div>
              <h1 className="uppercase text-md ">full name</h1>
              <p className="capitalize font-medium text-lg opacity-80">
                {product.guarantor.firstName} {product.guarantor.lastName}
              </p>
            </div>
            <div>
              <h1 className="uppercase text-md ">phone Number</h1>
              <p className="capitalize font-medium text-lg opacity-80">
                {phoneConstruct(product.guarantor.phoneNumber)}
              </p>
            </div>
            <div>
              <h1 className="uppercase text-md ">email address</h1>
              <p className="font-medium text-lg opacity-80 lowercase">
                {product.guarantor.firstName}@gmail.com
              </p>
            </div>
            <div>
              <h1 className="uppercase text-md ">relationship</h1>
              <p className="capitalize font-medium text-lg opacity-80">
                sister
              </p>
            </div>
          </div>
        </section>
        <section className="py-6">
          <div className="grid grid-cols-5 gap-y-6 mt-6">
            <div>
              <h1 className="uppercase text-md ">full name</h1>
              <p className="capitalize font-medium text-lg opacity-80">
                {product.guarantor.firstName} {product.guarantor.lastName}
              </p>
            </div>
            <div>
              <h1 className="uppercase text-md ">phone Number</h1>
              <p className="capitalize font-medium text-lg opacity-80">
                {phoneConstruct(product.guarantor.phoneNumber)}
              </p>
            </div>
            <div>
              <h1 className="uppercase text-md ">email address</h1>
              <p className="font-medium text-lg opacity-80 lowercase">
                {product.guarantor.firstName}@gmail.com
              </p>
            </div>
            <div>
              <h1 className="uppercase text-md ">relationship</h1>
              <p className="capitalize font-medium text-lg opacity-80">
                sister
              </p>
            </div>
          </div>
        </section>
      </div>
    )
  );
};

export default SingleUserGeneral;
