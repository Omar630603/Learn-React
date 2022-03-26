import React, { Component } from "react";
import Image from "./Image"; // Class Component List
class List extends Component {
  render() {
    return (
      <div>
        <ol>
          <li>
            One
            <Image linkImg="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/food1.jpg" />
          </li>
          <li>
            Two
            <Image linkImg="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/nasipadang.jpg" />
          </li>
          <li>
            Three
            <Image linkImg="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sate.png" />
          </li>
          <li>
            Four
            <Image linkImg="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sotolamongan.png" />
          </li>
        </ol>
      </div>
    );
  }
}
export default List;
