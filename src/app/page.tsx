"use client";
import { useRouter } from "next/navigation";

export default function OpsHomePage() {
  const router = useRouter();
  return (
    <div style={{minHeight:"100vh",background:"#000B1E",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"16px"}}>
      <div style={{textAlign:"center",marginBottom:"48px"}}>
        <div style={{display:"flex",gap:"8px",justifyContent:"center",marginBottom:"8px"}}>
          <span style={{fontSize:"48px",fontWeight:900,color:"white"}}>Ops</span>
          <span style={{fontSize:"48px",fontWeight:900,color:"#08DDBC"}}>BIA</span>
        </div>
        <p style={{color:"#8892A4",fontSize:"12px",letterSpacing:"3px",textTransform:"uppercase"}}>
          BIA Energy SAS ESP · Plataforma Operacional
        </p>
      </div>
      <p style={{color:"#525A72",fontSize:"11px",letterSpacing:"2px",textTransform:"uppercase",marginBottom:"24px"}}>
        Selecciona un módulo
      </p>
      <div style={{display:"flex",gap:"16px",flexWrap:"wrap",justifyContent:"center"}}>
        <button onClick={() => router.push("/login")}
          style={{background:"#001035",border:"1px solid rgba(8,221,188,0.3)",borderRadius:"16px",padding:"32px",cursor:"pointer",display:"flex",flexDirection:"column",alignItems:"center",gap:"12px",minWidth:"180px"}}>
          <span style={{fontSize:"40px"}}>📋</span>
          <div>
            <p style={{color:"white",fontWeight:"bold",fontSize:"16px",margin:0}}>App Turnos</p>
            <p style={{color:"#525A72",fontSize:"12px",margin:"4px 0 0"}}>Gestión de turnos</p>
          </div>
        </button>
        <a href="https://micaja3-one.vercel.app" target="_blank" rel="noopener noreferrer"
          style={{background:"#001035",border:"1px solid rgba(82,90,114,0.3)",borderRadius:"16px",padding:"32px",display:"flex",flexDirection:"column",alignItems:"center",gap:"12px",textDecoration:"none",minWidth:"180px"}}>
          <span style={{fontSize:"40px"}}>💰</span>
          <div>
            <p style={{color:"white",fontWeight:"bold",fontSize:"16px",margin:0}}>MiCaja</p>
            <p style={{color:"#525A72",fontSize:"12px",margin:"4px 0 0"}}>Caja menor</p>
          </div>
        </a>
      </div>
    </div>
  );
}