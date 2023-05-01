//Khởi tạo thư viện icon của riêng bạn
import { library } from '@fortawesome/fontawesome-svg-core';
import * as IconsSolid from '@fortawesome/free-solid-svg-icons';

let iconList = Object
    .keys(IconsSolid)
    .filter(key => key !== "fas" && key !== "prefix")
    .map(icon => IconsSolid[icon])

library.add(...iconList)