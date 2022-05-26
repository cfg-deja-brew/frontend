import React, { useState, useEffect } from "react"
import { useCookies } from "react-cookie"
import { getUserInfo } from "../api/api"

function Profile() {
  const [cookies, setCookie, removeCookie] = useCookies(['sessionId'])
  const [userInfo, setUserInfo] = useState()

  const sessionId = cookies['sessionId']

  useEffect(function() {
    getUserInfo(sessionId).then(setUserInfo)
  }, [])

  return (
    <div className="container h-100 py-5 d-flex flex-column justify-content-center align-items-center text-light">
      {userInfo &&
        <div className="rounded transparent-background p-5 fs-4">
          <table>
            <tr>
              <td className="m-3 p-3">Name</td>
              <td><div className="rounded bg-light text-dark m-3 p-3">{userInfo.FirstName} {userInfo.LastName}</div></td>
            </tr>
            <tr>
              <td className="m-3 p-3">Email</td>
              <td><div className="rounded bg-light text-dark m-3 p-3">{userInfo.Email}</div></td>
            </tr>
            <tr>
              <td>Mobile</td>
              <td><div className="rounded bg-light text-dark m-3 p-3">{userInfo.Mobile}</div></td>
            </tr>
          </table>
        </div>
      }
    </div>
  )
}

export default Profile