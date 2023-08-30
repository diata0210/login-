import StudentDetail from "@/components/swr/StudentDetail";
import React from "react";

type Props = {};

export default function SWRPage({}: Props) {
  return (
    <div>
      <h1>SWRPlayGround</h1>
      <StudentDetail studentId="lea319jollj7y1rs"/>
    </div>
  );
}
