import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import LoadingBox from "../components/LoadingBox";
import Pagination from "./../components/Pagination";
import { pagination } from "./../utils/pagination";
import _ from "lodash"

const PostsScreen = () => {
  const [perPage, setPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);

  const posts = useSelector((state) => state.posts);
  const { loading, items } = posts;
  const [search, setSearch] = useState("");
  const [itemList, setItemList] = useState([]);
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  useEffect(() => setItemList(items), [items]);
  const filteredItems = itemList.filter(
    (item) =>
      item.title.toLowerCase().includes(search) ||
      item.content.toLowerCase().includes(search)
  );

  const sortItemsDes=() =>{
    setItemList(_.orderBy(itemList,"status","desc"))
   
  }
  const sortItemsAsc=() =>{
    setItemList(_.orderBy(itemList,"status","asc"))
  }
  const sortItems=() =>{
    setItemList(items)
  }

  const archiveItems = pagination(filteredItems, currentPage, perPage);

  return loading ? (
    <LoadingBox></LoadingBox>
  ) : (
    <>
      <div className="d-flex justify-content-center">
        <input
          className="d-rtl m-10 "
          type="text"
          placeholder="جستجو..."
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="d-flex justify-content-center">
        <table>
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Content</th>
              <th scope="col">
                <span onClick={sortItems} style={{cursor:"pointer"}}>
                Status{" "}</span>
                <span
                  className="fa fa-long-arrow-up"
                  style={{ margin: "10px",cursor:"pointer" }}
                  onClick={sortItemsDes}
                ></span>{" "}
                <span
                  className="fa fa-long-arrow-down"
                  style={{ margin: "10px" ,cursor:"pointer"}}
                  onClick={sortItemsAsc}
                ></span>
              </th>
            </tr>
          </thead>
          <tbody>
            {archiveItems.map((item) => (
              <tr key={item.id}>
                <td>{item.title}</td>
                <td>{item.content}</td>
                <td>{item.status} </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Pagination
        totalCourse={items.length}
        perPage={perPage}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </>
  );
};

export default PostsScreen;
