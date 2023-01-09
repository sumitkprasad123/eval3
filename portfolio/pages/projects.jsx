import Link from "next/link";
import React from "react";

import { AiOutlineStar } from "react-icons/ai";
import { BiGitBranch } from "react-icons/bi";
import { AiOutlineFolderOpen } from "react-icons/ai";
import { GoPrimitiveDot } from "react-icons/go";

const Projects = ({ data }) => {
  console.log(data);
 
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(2,1fr)",
        gap:"1rem",
        padding:"1rem"
      }}
    >
      {data.items.map((el) => (
        <Link key={el.i} href={el.html_url}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              border: "1px solid black",
              padding: "1rem",
              alignItems: "center",
            }}
          >
            <div  style={{
                  display:"grid",
                  gridAutoColumns:"repeat(3,1fr)",
                  gap:"1rem"
                }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  color:'black',
                }}
              >
                <AiOutlineFolderOpen /> <span><h3>{el.name}</h3></span>
              </div >
              <p>{el.description}</p>
              <div style={{ display: "flex", alignItems: "center" ,columnGap:'10px' }}>
                <AiOutlineStar/> <span>{el.watchers}</span>
                <BiGitBranch /> <span>{el.forks}</span>
                <GoPrimitiveDot /> <span>{el.language}</span>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export async function getServerSideProps() {
  // Fetch data from external API
  const r = await fetch(
    `https://api.github.com/search/repositories?q=user:sumitkprasad123+fork:true&sort=updated&per_page=10&type=Repositories`
  );
  const d = await r.json();

  // Pass data to the page via props
  return { props: { data: d } };
}

export default Projects;
