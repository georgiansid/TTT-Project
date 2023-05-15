import React, { useState, useEffect } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Label } from 'recharts';
import { CSVLink } from 'react-csv';

const Output = () => {
  const [myArr, setMyArr] = useState(null);
  const myStyle = {
    color: "black",
    backgroundColor: "white",
    paddingLeft: "50px",
    fontFamily: "Arial"
  }

  function getOutput() {
    fetch('https://www.terriblytinytales.com/test.txt')
      .then(response => response.text())
      .then(data => {
        const result = countWords(data.toLowerCase());
        setMyArr(result);
      })
      .catch(error => {
        console.error(error);
      });
  }

  function countWords(str) {
    if (str.length === 0) {
      return {};
    }
    var output = {};
    var strArr = str.split(/[\s,./]+/);
    for (var i = 0; i < strArr.length; i++) {
      var word = strArr[i];
      if (output[word] === undefined) {
        output[word] = 1;
      } else {
        output[word] += 1;
      }
    }
    const sortable = Object.entries(output).sort(([, a], [, b]) => b - a);
    const finalArr = sortable.slice(0, 21);
    finalArr.sort((a, b) => a[0].localeCompare(b[0]));
    finalArr[8][0] = "I"
    finalArr[4][0] = "com†"
    var objs = finalArr.map(x => ({
      Words: x[0],
      Occurence: x[1]
    }));
    return objs;
  }

  useEffect(() => {
    getOutput();
  }, []);

  return (
    <div>
      {myArr && (
        <ResponsiveContainer width={"99%"} height={600}>
          <BarChart
            width={500}
            height={300}
            data={myArr}
            margin={{
              top: 50,
              right: 30,
              bottom: 10,
              left: 20
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="Words" >
              <Label value="Top 21* words with highest occurrence" offset={-5} position="insideBottom" />
            </XAxis>
            <YAxis label={{ value: 'How many times the words occurred in the file', angle: -90, position: 'Left' }} />
            <Tooltip />
            <Bar dataKey="Occurence" fill='#8884d8'>
              {
                myArr.map((entry, index) => (
                  <Cell stroke='#000000' fill={index === 4 ? "#82ca9d" : "#8884d8"} strokeWidth={index === 4 ? 2 : 0} />
                ))
              }
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      )}
      {!myArr && <p>Loading...</p>}
      {myArr && <><p style={myStyle}>*There are 21 entries in the histogram, as it includes †"com" from ".com" of the links provided.</p>
      <CSVLink data={myArr} filename={"Output.csv"} style={myStyle}>Download CSV</CSVLink></>}
    </div>
  );
};

export default Output;