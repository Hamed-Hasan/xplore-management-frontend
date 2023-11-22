import { Pagination } from "antd";

const XPagination = ({ handlePaginationChange, meta, size }: any) => {
  return (
    <div>
      <Pagination
        onChange={handlePaginationChange}
        defaultCurrent={meta?.page}
        showSizeChanger={true}
        total={meta?.total}
        pageSize={size}
        pageSizeOptions={[5, 10, 15]}
      />
    </div>
  );
};

export default XPagination;
