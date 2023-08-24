// Decoda jwt tokenet samt erhålla rollen från den


function getLocalJWTData() {
  const localJWTToken = localStorage.getItem("token");
  if(localJWTToken) {
    const tokenParts = localJWTToken.split(".");
    const payload = tokenParts[1];
  
    let payloadData = window.atob(payload);
    return JSON.parse(payloadData);
  } else {
    return {"role":"Guest"}
  }
}

function getRole() {
    return getLocalJWTData().role;
}

export default {getLocalJWTData, getRole};
