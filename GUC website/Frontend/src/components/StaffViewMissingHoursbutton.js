import React, { useState, useEffect } from "react"
import { Form, Row, Col, Button } from "react-bootstrap"
import "../stylesheets/logout.css"
import "bootstrap/dist/css/bootstrap.min.css"
import axios from "axios"
import backendlink from "../backendlink"
import { useHistory } from "react-router-dom"
export default function StaffViewMissingHoursbutton(props) {
  const history = useHistory()
  const link= `/${props.type}/missinghours`

  const link1="/"+props.type+"/missinghours"
  const [logoutmessage, setLogoutmessage] = useState("")
  const [MissingDaysErr, setMissingDaysErr] = useState("")
  const token = localStorage.getItem("token")

  return (
    <div className="logout">
      <Col className="logoutButtonCol ">
        <Button
          variant="dark"
          size="logoutButton"
          type="submit"
          onClick={ ()=>{history.push(link)}}
        >
          Missing Hours
        </Button>
      </Col>
    </div>
  )
}
