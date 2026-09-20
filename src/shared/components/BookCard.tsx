import React from "react";
import Image from "next/image";
import Link from "next/link";
import { IbookType } from "@/types/book.type";

const BookCard = ({ bookCard }: { bookCard: IbookType }) => {
  const { bookId, bookName, author, image, rating, category, tags } = bookCard;

  return (
    <div className="group flex flex-col justify-between border border-gray-100 rounded-3xl p-6 bg-white shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      <div>
        {/* Book Cover Image Canvas */}
        <div className="bg-[#F3F3F3] rounded-2xl py-8 px-4 flex items-center justify-center overflow-hidden mb-6">
          <div className="relative h-50 w-35 shadow-md group-hover:scale-105 transition-transform duration-300">
            <Image
              src={image}
              alt={bookName}
              className="object-cover rounded-md"
              width={500}
              height={500}
            />
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tags?.map((tag: string, index: number) => (
            <span
              key={index}
              className="text-xs font-semibold px-3 py-1 bg-[#23BE0A]/10 text-[#23BE0A] rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Title & Author */}
        <h2 className="text-xl font-bold font-serif text-gray-900 line-clamp-1 group-hover:text-[#23BE0A] transition-colors mb-2">
          {bookName}
        </h2>
        <p className="text-sm font-medium text-gray-500 mb-4">
          By : <span className="text-gray-700 font-semibold">{author}</span>
        </p>
      </div>

      {/* Footer Info & Action */}
      <div>
        {/* Category & Rating */}
        <div className="border-t border-dashed border-gray-200 pt-4 flex items-center justify-between text-sm text-gray-600 mb-5">
          <span className="font-medium text-gray-500">{category}</span>
          <div className="flex items-center gap-1.5 font-semibold text-gray-800">
            <span>{rating}</span>
            <svg
              className="w-4 h-4 text-amber-400 fill-current"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>
        </div>

        {/* View Details Button */}
        <Link
          href={`/books/${bookId}`}
          className="w-full flex items-center justify-center gap-2 bg-[#23BE0A] hover:bg-[#1fa709] active:scale-[0.98] text-white font-medium text-sm py-3 px-4 rounded-xl transition-all duration-200 shadow-sm hover:shadow-md"
        >
          View Details
          <svg
            className="w-4 h-4 transition-transform group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default BookCard;
