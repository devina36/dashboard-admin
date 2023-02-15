'use client';
import { Line } from 'react-chartjs-2';
import { CategoryScale, Chart, LinearScale, PointElement, LineElement } from 'chart.js';
import { useEffect, useState } from 'react';

Chart.register(CategoryScale, LinearScale, PointElement, LineElement);

function countDuplicates(arr, prop) {
  let counts = {};

  for (let i = 0; i < arr.length; i++) {
    if (counts[arr[i][prop]]) {
      counts[arr[i][prop]]++;
    } else {
      counts[arr[i][prop]] = 1;
    }
  }

  return counts;
}

function Charts() {
  const [hasil, setHasil] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const response = await fetch(`https://dummyjson.com/products?limit=100`);
      const result = await response.json();
      setHasil(countDuplicates(result.products, 'brand'));
      setLoading(false);
    };

    fetchData();
  }, []);

  const keys = Object.keys(hasil);
  const value = Object.values(hasil);

  const data = {
    labels: keys,
    datasets: [
      {
        data: value,
      },
    ],
  };

  const options = {
    elements: {
      line: {
        tension: 0,
        borderWidth: 2,
        borderColor: '#FEE156',
        fill: 'start',
        backgroundColor: '#FEE156',
      },
      point: {
        radius: 5,
        hitRadius: 0,
      },
    },
  };

  return (
    <div>
      <h1 className="text-2xl text-bold mb-7">Dashboard</h1>
      {loading ? (
        'Loading ...'
      ) : (
        <div className="overflow-x-auto snap-x snap-mandatory">
          <div className="w-full min-w-[600px]">
            <Line data={data} width={100} height={40} options={options} className="divide-y" />
          </div>
        </div>
      )}
    </div>
  );
}

export default Charts;
