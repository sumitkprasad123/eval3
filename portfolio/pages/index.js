
import Image from "next/image";
import Link from "next/link";
import Experience from "./experience";
import Projects from "./projects";



export default function Page({ info1,info2 }) {
  console.log("data1", info1);
  console.log("data2", info2);
  return (
    <div
      style={{
        height: "auto",
        width: "100%",
        margin: "auto",
        display: "flex",
        
      }}
    >
      <div
        style={{
          height: "auto",
          width: "30%",
          margin: "auto",
          border:"2px solid red"
        }}
      >
        <div
          style={{
            display: "block",
            textAlign: "center",
            padding: "1rem",
          }}
        >
          <div >
          <Image
            src="/pic.png"
            height={100}
            width={100}
            alt={info2.name}
            style={{borderRadius:"50%"}}
          />
          </div>
          <h2> {info2.name}</h2>
          <div style={{display:"flex",justifyContent:"center",gap:"0.5rem"}}>
            <Link href="/cv.pdf"  target="_blank">
              <button>Resume</button>
            </Link>
            <Link href={info2.html_url}>
              <button>Follow</button>
            </Link>
          </div>
        </div>

        <div
          style={{
            width:"90%",
            margin:"auto",
            display: "grid",
            gridTemplateColumns: "repeat(3,1fr)",
            gap: "0.5rem",
            padding: "1rem",
                  
            border:"1px solid red"
          }}
        >
          <button>TypeScript</button>
          <button>React</button>
          <button>Redux</button>
          <button>node</button>
          <button>Javascript</button>
          <button>Html</button>
          <button>Css</button>
          <button>chakraUI</button>
        </div>
        <div
          style={{
            gap: "5px",
            padding: "1rem",
          }}
        >
          <Experience />
        </div>
      </div>
      <div
        style={{
          width: "70%",
          height: "auto",
          margin: "auto",
        }}
      >
        <Projects data={info1} />
      </div>
    </div>
  );
}

export async function getStaticProps() {
  // Fetch data from external API
  const res1 = await fetch(
    `https://api.github.com/search/repositories?q=user:sumitkprasad123+fork:true&sort=updated&per_page=10&type=Repositories`
  );
  const d1 = await res1.json();

  const res2 = await fetch(`https://api.github.com/users/sumitkprasad123`);
  const d2 = await res2.json();

  // Pass data to the page via props
  return { props: { info1: d1, info2: d2 } };
}
