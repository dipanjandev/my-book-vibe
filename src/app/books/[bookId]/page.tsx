import { IbookType } from "@/types/book.type";
import Image from "next/image";
import React from "react";

interface IpageBook {
  params: Promise<{
    bookId: string;
  }>;
}

const getBooks = async () => {
  const response = await fetch("http://localhost:3000/booksData.json");
  return response.json();
};

const Page = async ({ params }: IpageBook) => {
  const { bookId } = await params;
  const booksData = await getBooks();
  const book = booksData.find(
    (book: IbookType) => String(book.bookId) === String(bookId),
  ) as IbookType | undefined;

  // কোনো বই পাওয়া না গেলে সেফটি চেক
  if (!book) {
    return (
      <div className="container mx-auto text-center py-20">
        <h2 className="text-2xl font-bold text-gray-800">Book not found!</h2>
      </div>
    );
  }

  const {
    bookName,
    author,
    image,
    review,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
  } = book;

  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-white p-6 sm:p-10 rounded-3xl border border-gray-100 shadow-xs">
        {/* বাম পাশের বইয়ের ছবি */}
        <div className="lg:col-span-5 bg-[#131313]/5 rounded-3xl p-8 sm:p-14 flex items-center justify-center min-h-105 lg:min-h-140">
          <div className="relative w-55 sm:w-70 h-85 sm:h-107.5 drop-shadow-2xl">
            <Image
              src={image}
              alt={bookName}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 350px"
              className="object-contain"
            />
          </div>
        </div>

        {/* ডান পাশের বিস্তারিত তথ্য */}
        <div className="lg:col-span-7 flex flex-col justify-between space-y-5">
          {/* নাম ও লেখক */}
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold font-serif text-[#131313] mb-2">
              {bookName}
            </h1>
            <p className="text-base sm:text-lg text-gray-600 font-medium">
              By : <span className="text-[#131313]">{author}</span>
            </p>
          </div>

          {/* ক্যাটাগরি */}
          <div className="border-t border-b border-gray-200 py-3">
            <span className="text-base sm:text-lg font-medium text-gray-700">
              {category}
            </span>
          </div>

          {/* রিভিউ */}
          <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
            <strong className="text-[#131313] font-bold">Review : </strong>
            {review}
          </p>

          {/* ট্যাগ */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            <span className="font-bold text-[#131313] text-sm sm:text-base mr-2">
              Tag
            </span>
            {tags?.map((tag, index) => (
              <span
                key={index}
                className="text-xs sm:text-sm font-semibold px-4 py-1.5 bg-[#23BE0A]/5 text-[#23BE0A] rounded-full"
              >
                #{tag}
              </span>
            ))}
          </div>

          <div className="border-t border-gray-200"></div>

          {/* স্পেসিফিকেশন টেবিল */}
          <div className="grid grid-cols-[160px_1fr] gap-y-3 text-sm sm:text-base">
            <span className="text-gray-500">Number of Pages:</span>
            <span className="font-bold text-[#131313]">{totalPages}</span>

            <span className="text-gray-500">Publisher:</span>
            <span className="font-bold text-[#131313]">{publisher}</span>

            <span className="text-gray-500">Year of Publishing:</span>
            <span className="font-bold text-[#131313]">{yearOfPublishing}</span>

            <span className="text-gray-500">Rating:</span>
            <span className="font-bold text-[#131313]">{rating}</span>
          </div>

          {/* অ্যাকশন বাটন */}
          <div className="flex items-center gap-4 pt-4">
            <button
              type="button"
              className="btn btn-outline border-gray-300 hover:border-gray-400 hover:bg-gray-100 text-[#131313] font-bold px-7 rounded-xl"
            >
              Read
            </button>
            <button
              type="button"
              className="btn bg-[#50B1C9] hover:bg-[#439cb2] text-white font-bold px-7 rounded-xl border-none shadow-none"
            >
              Wishlist
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
