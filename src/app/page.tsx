"use client";

import { data } from "./data";
import { useEffect, useState } from "react";
import TabelCard from "./components/tabelcard";
import { useSearchParams } from "next/navigation";

export default function Home() {
  const searchParams = useSearchParams();
  const search = searchParams.get("sort");

  const ascendingByName: any = [...data].sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  const descendingByName: any = [...data].sort((a, b) =>
    b.name.localeCompare(a.name)
  );

  const ascendingByDialCode: any = [...data].sort((a, b) =>
    a.dial_code.localeCompare(b.dial_code)
  );

  const descendingByDialCode: any = [...data].sort((a, b) =>
    b.dial_code.localeCompare(a.dial_code)
  );

  const ascendingByCode: any = [...data].sort((a, b) =>
    a.code.localeCompare(b.code)
  );

  const descendingByCode: any = [...data].sort((a, b) =>
    b.code.localeCompare(a.code)
  );
  const [dataArray, setdataArray] = useState([...data]);

  useEffect(() => {
    if (search == "name") {
      setdataArray(ascendingByName);
    }
    if (search == "name:desc") {
      setdataArray(descendingByName);
    }
    if (search == "dial_code") {
      setdataArray(ascendingByDialCode);
    }
    if (search == "dial_code:desc") {
      setdataArray(descendingByDialCode);
    }
    if (search == "code") {
      setdataArray(ascendingByCode);
    }
    if (search == "code:desc") {
      setdataArray(descendingByCode);
    }
    return () => {};
  }, []);

  return (
    <>
      <div className="h-full p-36 bg-[#F3F4F6] flex flex-col items-center">
        <h1 className="text-black text-3xl h-24">Task NetWeb Tech</h1>
        <a className="text-sky-500 text-lg" href="https://github.com/igsourabh">
          Sourabh
        </a>
        <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
          <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
            <table className="min-w-full divide-y divide-gray-300">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="py-3.5 px-3 first:pl-4 text-left text-sm text-gray-900 first:sm:pl-6">
                    <a
                      className="inline-flex font-semibold group"
                      href={
                        search == null
                          ? "/?sort=name"
                          : search == "name"
                          ? "/?sort=name%3Adesc"
                          : "/"
                      }>
                      Name
                      <span
                        className={`${
                          search == null && "invisible group-hover:visible"
                        } text-gray-400  flex-none ml-2 rounded bg-slate-300`}>
                        {search == null && (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                            className=" w-5 h-5">
                            <path
                              fillRule="evenodd"
                              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                              clipRule="evenodd"></path>
                          </svg>
                        )}
                        {search == "name" && (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                            className=" w-5 h-5">
                            <path
                              fillRule="evenodd"
                              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                              clipRule="evenodd"></path>
                          </svg>
                        )}

                        {search == "name:desc" && (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                            className="rotate-180 w-5 h-5">
                            <path
                              fillRule="evenodd"
                              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                              clipRule="evenodd"></path>
                          </svg>
                        )}
                      </span>
                    </a>
                  </th>

                  <th
                    scope="col"
                    className="py-3.5 px-3 first:pl-4 text-left text-sm text-gray-900 first:sm:pl-6">
                    <a
                      className="inline-flex font-semibold group"
                      href={
                        search == null
                          ? "/?sort=dial_code"
                          : search == "dial_code"
                          ? "/?sort=dial_code%3Adesc"
                          : "/"
                      }>
                      Dial_code
                      <span
                        className={`${
                          search == null && "invisible group-hover:visible"
                        } text-gray-400  flex-none ml-2 rounded bg-slate-300`}>
                        {search == null && (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                            className=" w-5 h-5">
                            <path
                              fillRule="evenodd"
                              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                              clipRule="evenodd"></path>
                          </svg>
                        )}
                        {search == "dial_code" && (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                            className=" w-5 h-5">
                            <path
                              fillRule="evenodd"
                              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                              clipRule="evenodd"></path>
                          </svg>
                        )}

                        {search == "dial_code:desc" && (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                            className="rotate-180 w-5 h-5">
                            <path
                              fillRule="evenodd"
                              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                              clipRule="evenodd"></path>
                          </svg>
                        )}
                      </span>
                    </a>
                  </th>

                  <th
                    scope="col"
                    className="py-3.5 px-3 first:pl-4 text-left text-sm text-gray-900 first:sm:pl-6">
                    <a
                      className="inline-flex font-semibold group"
                      href={
                        search == null
                          ? "/?sort=code"
                          : search == "code"
                          ? "/?sort=code%3Adesc"
                          : "/"
                      }>
                      Code
                      <span
                        className={`${
                          search == null && "invisible group-hover:visible"
                        } text-gray-400  flex-none ml-2 rounded bg-slate-300`}>
                        {search == null && (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                            className=" w-5 h-5">
                            <path
                              fillRule="evenodd"
                              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                              clipRule="evenodd"></path>
                          </svg>
                        )}
                        {search == "code" && (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                            className=" w-5 h-5">
                            <path
                              fillRule="evenodd"
                              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                              clipRule="evenodd"></path>
                          </svg>
                        )}

                        {search == "code:desc" && (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                            className="rotate-180 w-5 h-5">
                            <path
                              fillRule="evenodd"
                              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                              clipRule="evenodd"></path>
                          </svg>
                        )}
                      </span>
                    </a>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {dataArray.map((e, index) => {
                  return <TabelCard {...e} key={index} />;
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
