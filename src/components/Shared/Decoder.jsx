// Decoda jwt tokenet samt erhålla rollen från den


function getLocalJWTData() {
  const localJWTToken = localStorage.getItem("token");
  const tokenParts = localJWTToken.split(".");
  const payload = tokenParts[1];

  let payloadData = window.atob(payload);
  return JSON.parse(payloadData);
}

function getRole() {
  return getLocalJWTData().role;
}

export default {getLocalJWTData, getRole};
