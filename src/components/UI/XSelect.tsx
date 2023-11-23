import { iServices } from "@/interface/api";
import { useGetServicesQuery } from "@/redux/api/features/services/servicesApi";
import { Select } from "antd";

const XSelect = ({ setLocation }: any) => {
  const { data } = useGetServicesQuery({});

  const service = data?.data?.data?.map((item: iServices) => ({
    value: item.location,
    label: item.location,
  }));

  const unique = service?.filter(
    (item: any, index: number, array: [any]) =>
      array.findIndex((i) => i.value === item.value) === index
  );

  return (
    <Select
      showSearch
      style={{ width: "100%" }}
      placeholder="Search to Select"
      optionFilterProp="children"
      onChange={(e) => setLocation(e)}
      filterOption={(input, option) =>
        (option?.label?.toString() ?? "").includes(input)
      }
      filterSort={(optionA, optionB) =>
        (optionA?.label?.toString() ?? "")
          .toLowerCase()
          .localeCompare((optionB?.label?.toString() ?? "").toLowerCase())
      }
      options={unique}
    />
  );
};

export default XSelect;
