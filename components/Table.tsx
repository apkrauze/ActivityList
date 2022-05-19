import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Tooltip,
  TableContainer,
} from "@chakra-ui/react";
import styles  from '../styles/Home.module.css'
import { TableProps } from "../interfaces";
import { FC } from "react";
import parse from "html-react-parser";
import useStore from "../store";
import Buttons from "./Buttons";

const TableComponent: FC<TableProps> = ({ activities }) => {
  const { addActivity } =useStore();
 
  return (
    
    <TableContainer className={styles.tableContainer}>
      
      <Table variant="striped" className={styles.table} >
        <Thead>
          <Tr>
            <Th>Select</Th>
            <Th>Name</Th>
            <Th>Sector Name</Th>
            <Th>Sector reference</Th>
            <Th>Nace Codes</Th>
          </Tr>
        </Thead>
        <Tbody>
          {activities &&
            activities.map((activity, index) => (
              <Tooltip
                key={index}
                label={parse(activity.description)}
                placement="bottom"
              >
                <Tr>
                  <Td>
                    <Buttons activity={activity} />
                  </Td>
                  <Td
                    height={[
                      `${activity.name.length > 30 ? "100px" : "70px"}`,
                      "120px",
                    ]}
                    style={{
                      whiteSpace: "normal",
                      wordWrap: "break-word",
                    }}
                  >
                    {activity.name}
                  </Td>
                  <Td
                   height={[
                    `${activity.name.length > 60 ? "100px" : "70px"}`,
                    "120px",
                  ]}
                  style={{
                    whiteSpace: "normal",
                    wordWrap: "break-word",
                  }}
                  >{activity.sector.name}</Td>
                  <Td>{activity.sector.reference}</Td>
                  <Td
                    height={[
                    `${activity.name.length > 60 ? "100px" : "70px"}`,
                    "120px",
                  ]}
                  style={{
                    whiteSpace: "normal",
                    wordWrap: "break-word",
                  }}
                    >{activity.naceCodes &&
                      activity.naceCodes.map((n, index) => {
                        return <div key={index}>{n.code}</div>;
                      })}
                  </Td>
                </Tr>
              </Tooltip>
            ))}
        </Tbody>

      </Table>
      
    </TableContainer>
    
  );
};

export default TableComponent;
