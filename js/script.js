const blogs = [
    {
        id: 1,
        "title": "20 nguyên tắc vàng khi sắp xếp hành lý du lịch",
        "description": "Hành lý luôn là vấn đề nan giải với nhiều người. Không phải ai cũng thông tỏ cách để sắp xếp đồ dùng hợp lý nhất. Dưới đây là 20...",
        "image": "https://file.hstatic.net/200000117085/article/62143206_625423267868889_2833770664121024859_n_fe454a0221114427a1d11dd1f6328016_grande.jpg",
        },
    {
        id: 2,
        "title": "12 địa điểm du lịch “phải đến” trong tháng",
        "description": "Không có tháng nào tốt hơn tháng 10 để đón những chiếc lá vàng, thưởng thức những món ăn, rượu vang và những cuộc phiêu lưu của mùa Thu trước ...",
        "image": "https://file.hstatic.net/200000117085/article/dua_nhau_di_tron_tai_nhung_diem_du_lich_hap_dan_nhat_thang_tu_11_59ce0b0bf0e6471d9a0a00bbc6dc79ef_grande.jpg",
    },
    {
        id: 3,
        "title": "Mẹo xử lý vali mốc siêu nhanh",
        "description": "Vali bị mốc có mùi gây khó chịu khiến không ít người dùng cảm thấy phiền toái. Bạn có thể tham khảo bài viết sau để có thể xử lý vấn đề này một cách nhanh chóng.",
        "image": "https://cf.shopee.vn/file/409885db0851f4d990cd9ba716cf0987",
    },
]

const bannerImg = [
    {
        id: 1,
        "brand": "DELSEY",
        "advertise": "https://theme.hstatic.net/200000117085/1000913765/14/slideshow_8.jpg?v=387",
        "logo": "https://theme.hstatic.net/200000117085/1000913765/14/gallery_item_6.jpg?v=387",
    },
    {
        id: 2,
        "brand": "PACSAFE",
        "advertise": "https://theme.hstatic.net/200000117085/1000913765/14/slideshow_6.jpg?v=387",
        "logo": "https://theme.hstatic.net/200000117085/1000913765/14/gallery_item_7.jpg?v=387",
    },
    {
        id: 3,
        "brand": "ACE. TOKYO",
        "advertise": "https://theme.hstatic.net/200000117085/1000913765/14/slideshow_5.jpg?v=387",
        "logo": "https://theme.hstatic.net/200000117085/1000913765/14/gallery_item_5.jpg?v=387",
    },
    {
        id: 4,
        "brand": "AMERICAN'S TOURISTER",
        "advertise": "https://theme.hstatic.net/200000117085/1000913765/14/slideshow_4.jpg?v=387",
        "logo": "https://theme.hstatic.net/200000117085/1000913765/14/gallery_item_8.jpg?v=387",
    },
    {
        id: 5,
        "brand": "KAMILIANT",
        "advertise": "https://theme.hstatic.net/200000117085/1000913765/14/slideshow_7.jpg?v=387",
        "logo": "https://theme.hstatic.net/200000117085/1000913765/14/gallery_item_15.jpg?v=387",
    },
    {
      id: 6,
      "brand": "CARLTON",
      "advertise": 0,
      "logo": "https://theme.hstatic.net/200000117085/1000913765/14/gallery_item_13.jpg?v=387",
    },
    {
      id: 7,
      "brand": "SAMSONITE",
      "advertise": 0,
      "logo": "https://theme.hstatic.net/200000117085/1000913765/14/gallery_item_2.jpg?v=387",
    },
    {
      id: 8,
      "brand": "TRAVELER' CHOICE",
      "advertise": 0,
      "logo": "https://theme.hstatic.net/200000117085/1000913765/14/gallery_item_10.jpg?v=387",
    },
    {
      id: 9,
      "brand": "WENGER",
      "advertise": 0,
      "logo": "https://theme.hstatic.net/200000117085/1000913765/14/gallery_item_12.jpg?v=387",
    },
]

const all_products = [
  {
      "id": 1,
      "name": "Vali kéo XC Tryal",
      "brand": "WENGER",
      "SKU": "610174",
      "image": "https://product.hstatic.net/200000117085/product/den_cabin5420_1_46cf724aa31f4e89b6af24bed943343f_grande.jpg",
      "category": "Vali",
      "type" : "Vali kéo nhựa",
      "size": "Cabin",
      "color": "#000000",
      "price": 4100000,
      "inventory": "Còn hàng",
      "status": "new",
      "inCart": 0,
      "description": "Cho dù bạn đang đi công tác hay đi du lịch, vali kéo vải XC Tryal đều cung cấp khả năng tổ chức đặc biệt và khả năng cơ động hiệu quả. 2 bánh xe lớn vận hành êm ái, dễ dàng vận chuyển các vật dụng cần thiết của bạn và có một khoang chứa rộng rãi. Cần kéo chắc chắn có thể thay đổi độ cao đảm bảo sự thoải mái tối ưu khi di chuyển và tay cầm êm ái giúp dễ dàng mang theo. Logo Wenger được in phản quang sắc sảo, bạn sẽ luôn nổi bật ở bất cứ nơi nào con đường đưa bạn đến.",
  },
  {
      "id": 2,
      "name": "Vali kéo Mapleton",
      "brand": "TRAVELER'S CHOICE",
      "SKU": "TC09132N26",
      "image": "https://product.hstatic.net/200000117085/product/xanhduong_trung6325_1_d5166fa7320e4e639f3a6ae602a9144f.jpg",
      "category": "Vali",
      "type" : "Vali kéo nhựa",
      "size": "Trung",
      "color": "#0000FF",
      "price": 4700000,
      "inventory": "Còn hàng",
      "status": "new",
      "inCart": 0,
      "description": "Vali kéo nhựa làm từ chất liệu tái chế thân thiện môi trường. Cần đẩy T-Cruiser sáng chế độc quyền. Tay cầm chắc chắn ở cả bên trên và bên hông. Tích hợp khóa số TSA an toàn tiêu chuẩn Hoa Kỳ. Khóa kéo chống trộm tăng khả năng bảo mật. Khả năng mở rộng tăng sức chứa. Hệ thống 4 bánh xe đôi Cyclone độc quyền. Nội thất tổ chức phong phú, tinh tế. Tích hợp cổng sạc iTravel USB và ngăn chứa pin sạc dự phòng (chỉ có trên size cabin)",
  },
  {
      "id": 3,
      "name": "Vali kéo Zuma",
      "brand": "TRAVELER'S CHOICE",
      "SKU": "TC09136R30",
      "image": "https://product.hstatic.net/200000117085/product/xam_cabin5521_1_82abb319a8c84bc592b83da355b41721.jpg",
      "category": "Vali",
      "type" : "Vali kéo nhựa",
      "size": "Cabin",
      "color": "#C0C0C0",
      "price": 6000000,
      "inventory": "Hết hàng",
      "status": "sale",
      "inCart": 0,
      "description": "Vali kéo nhựa làm từ chất liệu tái chế thân thiện môi trường. Cần đẩy T-Cruiser sáng chế độc quyền. Tay cầm chắc chắn ở cả bên trên và bên hông. Tích hợp khóa số TSA an toàn tiêu chuẩn Hoa Kỳ. Khóa kéo chống trộm tăng khả năng bảo mật. Khả năng mở rộng tăng sức chứa. Hệ thống 4 bánh xe đôi Cyclone độc quyền. Nội thất tổ chức phong phú, tinh tế. Tích hợp cổng sạc iTravel USB và ngăn chứa pin sạc dự phòng (chỉ có trên size cabin)",
  },
  {
      "id": 4,
      "name": "Vali kéo Ultimax",
      "brand": "TRAVELER'S CHOICE",
      "SKU": "TC06018E21",
      "image": "https://product.hstatic.net/200000117085/product/den_cabin5321_1_7f0dc128d3a94be5981118c160df7841.jpg",
      "category": "Vali",
      "type" : "Vali kéo nhựa",
      "size": "Đại",
      "color": "#000000",
      "price": 4900000,
      "inventory": "Còn hàng",
      "status": "sale",
      "inCart": 0,
      "description": "Vali kéo làm từ chất liệu nhựa 100% Polycarbonate bền chắc. Cần đẩy T-Cruiser sáng chế độc quyền, dễ dàng sử dụng. Tay cầm chắc chắn ở cả bên trên, dưới và bên hông. Tích hợp khóa số TSA an toàn tiêu chuẩn Hoa Kỳ. Hệ thống 4 bánh xe đôi Cyclone độc quyền vận hành êm nhẹ. Nội thất tổ chức phong phú, tinh tế. Khóa kéo chống trộm tăng khả năng bảo mật",
  },
  {
      "id": 5,
      "name": "Vali kéo Freestyle",
      "brand": "DELSEY",
      "SKU": "00385980143",
      "image": "https://product.hstatic.net/200000117085/product/xanhla_cabin5520_1_e463dbb683a44ea98e97138e3054176e_master.jpg",
      "category": "Vali",
      "type" : "Vali kéo nhựa",
      "size": "Đại",
      "color": "#008080",
      "price": 7200000,
      "inventory": "Còn hàng",
      "status": "",
      "inCart": 0,
      "description": "Vali kéo nhựa với thiết kế mang đậm phong cách Pháp. Khóa kéo đôi chống trộm SECURITECH® kết hợp với khóa số TSA an toàn. Hệ thống bánh xe đôi 360° mang lại cảm giác thoải mái tuyệt vời. Tổ chức nội thất phong phú, tinh tế. Tay cầm phía trên và bên hông để nâng dễ dàng.",
  },
  {
      "id": 6,
      "name": "Vali kéo Air Armour",
      "brand": "DELSEY",
      "SKU": "00386680100T9",
      "image": "https://product.hstatic.net/200000117085/product/den_cabin5520_1_f220a3ea655a405486e7963d9b780938.jpg",
      "category": "Vali",
      "type" : "Vali kéo nhựa",
      "size": "Đại",
      "color": "#000000",
      "price": 5900000,
      "inventory": "Còn hàng",
      "status": "",
      "inCart": 0,
      "description": "Vali kéo nhựa với thiết kế mang đậm phong cách Pháp. Khóa kéo đôi chống trộm SECURITECH® kết hợp với khóa số TSA an toàn. Hệ thống bánh xe đôi 360° mang lại cảm giác thoải mái tuyệt vời. Tổ chức nội thất phong phú, tinh tế. Tay cầm phía trên và bên hông để nâng dễ dàng.",
  },
  {
      "id": 7,
      "name": "Vali kéo Chromium",
      "brand": "DELSEY",
      "SKU": "00208180103R9",
      "image": "https://product.hstatic.net/200000117085/product/xanhla_cabin5520_1_d1696ece73a140ad8e29a07447da6058_master.jpg",
      "category": "Vali",
      "type" : "Vali kéo nhựa",
      "size": "Cabin",
      "color": "#008000",
      "price": 7300000,
      "inventory": "Còn hàng",
      "status": "",
      "inCart": 0,
      "description": "Vali kéo làm từ chất liệu nhựa 100% Polycarbonate bền chắc. Cần đẩy T-Cruiser sáng chế độc quyền, dễ dàng sử dụng. Tay cầm chắc chắn ở cả bên trên, dưới và bên hông. Tích hợp khóa số TSA an toàn tiêu chuẩn Hoa Kỳ. Hệ thống 4 bánh xe đôi Cyclone độc quyền vận hành êm nhẹ. Nội thất tổ chức phong phú, tinh tế. Khóa kéo chống trộm tăng khả năng bảo mật",
  },
  {
      "id": 8,
      "name": "Vali kéo Chatelet Air 2.0 Roland Garros",
      "brand": "DELSEY",
      "SKU": "00167682135RG",
      "image": "https://product.hstatic.net/200000117085/product/do_trung6624_1_7aa9e88027854ade8180bd1c37169507_master.jpg",
      "category": "Vali",
      "type" : "Vali kéo nhựa",
      "size": "Trung",
      "color": "#800000",
      "price": 14900000,
      "inventory": "Hết hàng",
      "status": "",
      "inCart": 0,
      "description": "Vali kéo nhựa làm từ chất liệu tái chế thân thiện môi trường. Cần đẩy T-Cruiser sáng chế độc quyền. Tay cầm chắc chắn ở cả bên trên và bên hông. Tích hợp khóa số TSA an toàn tiêu chuẩn Hoa Kỳ. Khóa kéo chống trộm tăng khả năng bảo mật. Khả năng mở rộng tăng sức chứa. Hệ thống 4 bánh xe đôi Cyclone độc quyền. Nội thất tổ chức phong phú, tinh tế. Tích hợp cổng sạc iTravel USB và ngăn chứa pin sạc dự phòng (chỉ có trên size cabin)",
  },
  {
      "id": 9,
      "name": "Vali kéo Brochant 2.0",
      "brand": "DELSEY",
      "SKU": "00225682102",
      "image": "https://product.hstatic.net/200000117085/product/xanhduong_cabin5520_1_fc1ce0c4dbc54d158eaed62b3fb06039_master.jpg",
      "category": "Vali",
      "type" : "Vali kéo vải",
      "size": "Đại",
      "color": "#0000FF",
      "price": 9600000,
      "inventory": "Hết hàng",
      "status": "",
      "inCart": 0,
      "description": "Cho dù bạn đang đi công tác hay đi du lịch, vali kéo vải XC Tryal đều cung cấp khả năng tổ chức đặc biệt và khả năng cơ động hiệu quả. 2 bánh xe lớn vận hành êm ái, dễ dàng vận chuyển các vật dụng cần thiết của bạn và có một khoang chứa rộng rãi. Cần kéo chắc chắn có thể thay đổi độ cao đảm bảo sự thoải mái tối ưu khi di chuyển và tay cầm êm ái giúp dễ dàng mang theo. Logo Wenger được in phản quang sắc sảo, bạn sẽ luôn nổi bật ở bất cứ nơi nào con đường đưa bạn đến.",
  },
  {
      "id": 10,
      "name": "Vali kéo Securitime Zip",
      "brand": "DELSEY",
      "SKU": "00217381111",
      "image": "https://product.hstatic.net/200000117085/product/bac_trung6825_1_150d93997a3a4892bf8ef2495f34217c_master.jpg",
      "category": "Vali",
      "type" : "Vali kéo nhôm",
      "size": "Trung",
      "color": "#FFFFFF",
      "price": 12100000,
      "inventory": "Còn hàng",
      "status": "",
      "inCart": 0,
      "description": "Vali kéo nhựa với thiết kế mang đậm phong cách Pháp. Khóa kéo đôi chống trộm SECURITECH® kết hợp với khóa số TSA an toàn. Hệ thống bánh xe đôi 360° mang lại cảm giác thoải mái tuyệt vời. Tổ chức nội thất phong phú, tinh tế. Tay cầm phía trên và bên hông để nâng dễ dàng.",
  },
  {
      "id": 11,
      "name": "Vali kéo Zakk",
      "brand": "KAMILIANT",
      "SKU": "FK5*09101",
      "image": "https://product.hstatic.net/200000117085/product/den_cabin5520_1_c8ff9775d8ff4047bcc0cc1f1f4e90f0_master.jpeg",
      "category": "Vali",
      "type" : "Vali kéo nhựa",
      "size": "Cabin",
      "color": "#000000",
      "price": 2400000,
      "inventory": "Còn hàng",
      "status": "",
      "inCart": 0,
      "description": "Vali kéo nhựa Zakk từ thương hiệu Kamiliant được tạo ra dành cho những du khách thường xuyên di chuyển và cần một chiếc vali gọn nhẹ, thích hợp cho những chuyến hành trình dài. Vali Zakk có một ngăn chính lớn và hai túi zip để chứa tất cả các hành lý một cách có tổ chức. Với lớp vỏ được làm bằng polypropylene cho độ bền cao và nhẹ nhàng, cùng với hệ thống 4 bánh xe xoay 360 độ vận hành êm ái và cần kéo bền chắc có thể điều chỉnh độ cao, vali kéo Zakk sẽ luôn theo bạn trong các chuyến hành trình tiếp theo.",
  },
  {
      "id": 12,
      "name": "Vali kéo Savanna",
      "brand": "KAMILIANT",
      "SKU": "FO4*09103",
      "image": "https://product.hstatic.net/200000117085/product/tim_cabin5520_1_2bc1ccfd9faa4c70bd8f453ea851671a_master.jpg",
      "category": "Vali",
      "type" : "Valo kéo vải",
      "size": "Cabin",
      "color": "#800080",
      "price": 2700000,
      "inventory": "Hết hàng",
      "status": "",
      "inCart": 0,
      "description": "Savanna là một bộ sưu tập vali kéo vải mới nhất từ thương hiệu Kamiliant, hoàn toàn phù hợp với nhu cầu của các du khách yêu thích sự tiết kiệm. BST này được đặc trưng bởi thiết kế thương mại đi kèm với các tính năng thiết yếu. Savanna cho thấy một sự mới mẻ vui tươi của các yếu tố tương phản màu sắc, tạo ra một cái nhìn thú vị và hiện đại.",
  },
  {
      "id": 13,
      "name": "Vali kéo Interlace",
      "brand": "SAMSONITE",
      "SKU": "QJ4*05001",
      "image": "https://product.hstatic.net/200000117085/product/trang_trung6724_1_1294df540db54e86b215c3db4106445d_6414ce4438f64cd0afca1317dab02b09_master.jpg",
      "category": "Vali",
      "type" : "Vali kéo nhựa",
      "size": "Trung",
      "color": "#FFFFFF",
      "price": 9600000,
      "inventory": "Còn hàng",
      "status": "",
      "inCart": 0,
      "description": "Vali Interlace được trang bị bánh xe đôi cho phép bạn di chuyển dễ dàng, khóa số TSA tiêu chuẩn Hoa Kỳ kết hợp với khóa kéo đôi chống trộm để đảm bảo hành lý của bạn luôn được an toàn. Lớp lót bên trong có thể tháo rời được làm từ chất liệu tái chế PET và được xử lý kháng khuẩn bằng công nghệ Microban là tiền đề cho các cam kết của Samsonite đối với các nỗ lực bền vững. BST Interlace có khả năng mở rộng tăng sức chứa ở tất cả các size, làm cho chiếc vali này trở thành một người bạn đồng hành thực sự tiện dụng và phong cách.",
  },
  {
      "id": 14,
      "name": "Vali kéo Azio",
      "brand": "SAMSONITE",
      "SKU": "HM1*69003",
      "image": "https://product.hstatic.net/200000117085/product/den_dai7528_1_9096ce77df5e44b7a44a5675800dadb7_4500898118f24ec29853f192c4e23980_master.jpg",
      "category": "Vali",
      "type" : "Vali kéo nhựa",
      "size": "Đại",
      "color": "#000000",
      "price": 9500000,
      "inventory": "Còn hàng",
      "status": "",
      "inCart": 0,
      "description": "Bộ sưu tập vali kéo nhựa Samsonite AZIO với màu sắc độc đáo và họa tiết đường rãnh hình chữ Z đầy phong cách, có tất cả các tính năng thiết yếu mà mọi du khách cần. Tất cả các kích cỡ vali đều có thể mở rộng, hệ thống bánh xe đôi vận hành êm nhẹ, khóa số TSA và khóa kéo đôi chống trộm bảo vệ hành lý an toàn, nội thất tổ chức phong phú, tinh tế giúp bạn thoải mái để trải nghiệm chuyến hành trình thú vị.",
  },
  {
      "id": 15,
      "name": "Vali kéo Polygon",
      "brand": "SAMSONITE",
      "SKU": "DX4*23001",
      "image": "https://product.hstatic.net/200000117085/product/trang_trung6122_1_0c0cfc769c7c4628b7c081fa9cd26486_master.jpg",
      "category": "Vali",
      "type" : "Vali kéo nhựa",
      "size": "Trung",
      "color": "#FFFFFF",
      "price": 9100000,
      "inventory": "Còn hàng",
      "status": "",
      "inCart": 0,
      "description": "Bộ sưu tập Polygon từ Samsonite là dự án đổi mới công nghệ kết hợp giữa chức năng đóng gói thông minh, hệ thống bánh xe cố định tiện ích và vẻ ngoài thời trang. Vỏ ngoài nổi bật bởi kết cấu vân đa giác trên nền tảng chất liệu polycarbonate với các vân sợi chổi mảnh, hạn chế khả năng trầy xước. Chính các vân đa giác này tạo hiệu ứng ánh sáng đẹp mắt và đặc biệt cho bộ sưu tập.",
  },
  {
      "id": 16,
      "name": "Vali kéo Lite-Box Alu",
      "brand": "SAMSONITE",
      "SKU": "CS0*09003",
      "image": "https://product.hstatic.net/200000117085/product/bac_trung6925_1_c70497408f164f74b4ba8f6ea92ebe51_master.jpg",
      "category": "Vali",
      "type" : "Vali kéo nhôm",
      "size": "Đại",
      "color": "#C0C0C0",
      "price": 28000000,
      "inventory": "Còn hàng",
      "status": "",
      "inCart": 0,
      "description": "Bộ sưu tập vali kéo nhôm Lite-Box Alu của Samsonite sẽ vượt qua sự mong đợi của bạn về cả phong cách và hiệu suất. Lớp vỏ nhôm bền chắc, chất lượng cao được anode hóa và các góc vali được gia cố chắc chắn. Hệ thống 4 bánh xe đôi xoay 360 độ êm nhẹ cùng với cần đẩy đôi có thể thay đổi độ cao đảm bảo vận hành trơn tru và thoải mái tối đa. Hành lý của bạn dễ dàng được đảm bảo an toàn với hệ thống khóa mới tích hợp khóa số TSA tiêu chuẩn Hoa Kỳ, kết hợp với thẻ bảng tên cho phép bạn nhanh chóng nhận ra hành lý của mình.",
  },
  {
      "id": 17,
      "name": "Vali kéo Senna",
      "brand": "AMERICAN TOURISTER",
      "SKU": "QC5*18002",
      "image": "https://product.hstatic.net/200000117085/product/xam_cabin5520_1_e8804a5184d14bd88415ab36b3541ab4.jpg",
      "category": "Vali",
      "type" : "Vali kéo nhôm",
      "size": "Cabin",
      "color": "#C0C0C0",
      "price": 3200000,
      "inventory": "Còn hàng",
      "status": "",
      "inCart": 0,
      "description": "Bộ sưu tập vali kéo nhựa Senna có thiết kế vượt thời gian với hoa văn được lấy ý tưởng từ những viên kim cương. Khả năng mở rộng tăng sức chứa (ở size trung và đại) cho phép dễ dàng sắp xếp hành lý. Cần đẩy ống đôi chắc chắn và hệ thống bánh xe đôi xoay 360° vận hành êm ái, ổn định. Lớp lót nội thất được làm từ chất liệu tái chế rPET và được xử lý kháng khuẩn bởi công nghệ từ Microban®.",
  },
  {
      "id": 18,
      "name": "Vali kéo Maxivo",
      "brand": "AMERICAN TOURISTER",
      "SKU": "HO2*19001",
      "image": "https://product.hstatic.net/200000117085/product/den_trung6825_1_ea763010d4de444998f59a752cbe222b_a80e2c02038c40d5969a5151f54a82a7_master.jpg",
      "category": "Vali",
      "type" : "vali kéo nhựa",
      "size": "Trung",
      "color": "#000000",
      "price": 5200000,
      "inventory": "Còn hàng",
      "status": "",
      "inCart": 0,
      "description": "Bộ sưu tập vali kéo nhựa Maxivo từ thương hiệu American Tourister cung cấp tất cả các tính năng tiện dụng để du khách có thể dễ dàng tận hưởng các trải nghiệm của chuyến đi. Tính năng chính của vali Maxivo là hệ thống đóng gói PlentiVol™ tỉ lệ 20:80 cho phép bạn dễ dàng sắp xếp hành lý. Vali Maxivo có một thiết kế vượt thời gian, đem lại cái nhìn pha lẫn giữa cổ điển và hiện đại. Tích hợp khóa kéo bảo mật DuoSaf™ và nút chặn bánh xe StePause™, Maxivo mang lại cho bạn sự thuận tiện và an tâm hơn trong quá trình di chuyển.",
  },
  {
      "id": 19,
      "name": "Vali kéo Kirby",
      "brand": "AMERICAN TOURISTER",
      "SKU": "GL8*09003",
      "image": "https://product.hstatic.net/200000117085/product/do_cabin5420_1_578bd1772fc147579544392b0328fb9f_master.jpg",
      "category": "Vali",
      "type" : "Vali kéo vải",
      "size": "Cabin",
      "color": "#800000",
      "price": 4400000,
      "inventory": "Hết hàng",
      "status": "",
      "inCart": 0,
      "description": "Bộ sưu tập vali kéo vải Kirby sẽ là sự lựa chọn an toàn đối với tất cả đối tượng khách hàng. Trọng lượng nhẹ do cấu tạo từ vải polyester siêu bền và nhẹ chuyên dụng trong ngành hàng hành lý đi kèm khả năng nới rộng và ngăn trước truy cập nhanh tiện dụng là những ưu điểm nổi bật của bộ sưu tập Kirby đến từ American Tourister.",
  },
  {
      "id": 20,
      "name": "Vali kéo Limo",
      "brand": "AMERICAN TOURISTER",
      "SKU": " GL9*91003",
      "image": "https://product.hstatic.net/200000117085/product/xam_cabin5520_1_d35a0ce573ef45ac940cffb76f64e7ee_master.jpg",
      "category": "Vali",
      "type" : "Vali kéo vải",
      "size": "Cabin",
      "color": "#C0C0C0",
      "price": 4800000,
      "inventory": "Hết hàng",
      "status": "",
      "inCart": 0,
      "description": "American Tourister tự hào cho ra mắt Limo là BST vali kéo vải đầu tiên từ thương hiệu sử dụng chất liệu vải Recyclex™ - loại vải được làm hoàn toàn từ chai nước nhựa PET tái chế. Chất liệu vải đặc biệt này được chế tạo đáp ứng hoàn hảo nhu cầu về chất liệu tiên phong của ngành hàng hành lý: chắc chắn, bền, dẻo dai và linh hoạt. Dựa trên chất liệu, Limo xây dựng từ nền tảng siêu nhẹ, và sự phối hợp đan xen của các lớp vải tương phản về sắc thái đậm nhạt và kết cấu hình học tạo nên nét khác lạ trong thiết kế.",
  },
  {
      "id": 21,
      "name": "Vali kéo Little Frontec",
      "brand": "AMERICAN TOURISTER",
      "SKU": "0691300-02",
      "image": "https://product.hstatic.net/200000117085/product/xanhnhat_cabin4517_1_8a4ab2580d174ea18ebd651502f846f6_645deedcb96f423ba274e0b3bdcd45ff_master.jpg",
      "category": "Vali",
      "type" : "Vali trẻ em",
      "size": "Cabin",
      "color": "#0000FF",
      "price": 4500000,
      "inventory": "Hết hàng",
      "status": "",
      "inCart": 0,
      "description": "Trao cho trẻ một chiếc vali của riêng mình có thể giúp cho bất kỳ bậc cha mẹ nào cũng nhẹ nhàng hơn, theo đúng nghĩa đen. Bí quyết là tìm đúng chiếc vali mà đứa trẻ rất yêu thích. Trước tiên, hãy khám phá phong cách dành cho trẻ em, nơi chứa mọi thứ, từ quần áo, giày dép cho đến chú gấu bông yêu quý, sách truyện và vài gói snack. Bộ sưu tập Little Frontec bắt mắt này có thể làm ngây ngất những du khách nhỏ tuổi đáng yêu. Lớp vỏ bên ngoài được làm bằng chất liệu polycarbonate bền nhẹ, chống trầy xước. Nội thất rộng rãi có vách ngăn lưới và dây đai chéo giúp sắp xếp hành lý dễ dàng, với lớp lót bên trong được xử lý bằng công nghệ kháng khuẩn do Microban® cung cấp.",
  },
  {
      "id": 22,
      "name": "Vali kéo Palisades 3-Z",
      "brand": "ACE. TOKYO",
      "SKU": "0691300-02",
      "image": "https://product.hstatic.net/200000117085/product/trang_cabin4518_1_ab1d4bd21be74d93ba670c2042b4ca24.jpg",
      "category": "Vali",
      "type" : "Vali kéo nhôm",
      "size": "Cabin",
      "color": "#FFFFFF",
      "price": 7100000,
      "inventory": "Hết hàng",
      "status": "",
      "inCart": 0,
      "description": "Bộ sưu tập vali kéo nhựa Palisades 3-Z từ thương hiệu ace. (Nhật Bản) được trang bị hệ thống bánh xe đôi có độ êm tuyệt vời và đạt được sự cân bằng hoàn hảo giữa thiết kế và tính thực dụng.",
  },
  {
      "id": 23,
      "name": "Balo laptop 16'' Quadma",
      "brand": "WENGER",
      "SKU": "610202",
      "image": "https://product.hstatic.net/200000117085/product/den_balo_1_8b0ddd7449a94d5ca125a42b0834642e.jpg",
      "category": "Balo",
      "type" : "Balo laptop",
      "size": "Balo",
      "color": "#000000",
      "price": 900000,
      "inventory": "Còn hàng",
      "status": "new",
      "inCart": 0,
      "description": "Dù bạn đang đi làm việc hay đang đi dạo, balo Quadma sẽ không bao giờ làm bạn thất vọng. Quadma được thiết kế hoàn hảo giúp bảo quản chiếc laptop 16'' một cách an toàn trong một ngăn chuyên dụng sang trọng, và cơ thể của bạn cũng được bảo vệ nhờ vào dây đeo vai công thái học có thể điều chỉnh cùng đệm lưng êm ái, thoáng mát. Nhờ tổ chức nội thất thông minh, bạn sẽ dễ dàng sắp xếp tất cả các vật dụng thiết yếu, trong khi túi lưới bên hông cung cấp chỗ chứa chai nước hoặc dù xếp.",
  },
  {
      "id": 24,
      "name": "Balo laptop 16'' Legacy",
      "brand": "WENGER",
      "SKU": "600631",
      "image": "https://product.hstatic.net/200000117085/product/den_balo_2_7c8112c22d2340deb6d1cc4fde2d2288_master.jpg",
      "category": "Balo",
      "type" : "Balo laptop",
      "size": "Balo",
      "color": "#000000",
      "price": 2500000,
      "inventory": "Còn hàng",
      "status": "new",
      "inCart": 0,
      "description": "Dễ dàng qua cửa kiểm tra an ninh sân bay với balo laptop 16'' Legacy. Cung cấp các chức năng tiện dụng và sự thoải mái nhẹ nhành, chiếc balo Legacy này là một kho lưu trữ có thiết kế đẹp dành cho các chuyên gia bận rộn. Ngăn có đệm Triple Protect bảo vệ laptop của bạn, cùng với các ngăn chức năng giữ cho mọi thứ luôn ngăn nắp. Nhờ vào sự ổn định, chiếc balo này hoàn toàn phù hợp cho dù bạn đang ở đâu và trong bất cứ hoàn cảnh nào. Dây đeo vai thoải mái vừa vặn và đai giá cần đẩy vali tiện lợi đảm bảo đi lại dễ dàng.",
  },
  {
      "id": 25,
      "name": "Balo laptop 16'' Sun",
      "brand": "WENGER",
      "SKU": "610212",
      "image": "https://product.hstatic.net/200000117085/product/xanhla_balo_1_3fbdf3ae9d4b448480bb153b6f0adf6e_master.jpg",
      "category": "Balo",
      "type" : "Balo laptop",
      "size": "Balo",
      "color": "#008000",
      "price": 2200000,
      "inventory": "Còn hàng",
      "status": "sale",
      "inCart": 0,
      "description": "Với hai tông màu vui tươi, balo laptop 16'' Sun mang lại sự tươi sáng và thiết kế cao cấp cho cuộc sống hàng ngày của bạn, cho dù bạn đang trên đường đến văn phòng hay đọc sách ở thư viện. Kết hợp hoàn hảo giữa các ngăn chức năng và khả năng bảo vệ đáng tin cậy cho chiếc laptop của bạn, chiếc balo này cũng cung cấp một ngăn tổ chức thiết yếu để cất giữ các thiết bị hàng ngày. Dây đai, quai đeo vai có đệm, đệm lưng êm ái thoáng khí và tay cầm lót đệm mang lại sự thoải mái khi sử dụng balo trong thời gian dài.",
  },
  {
      "id": 26,
      "name": "Balo laptop 16'' Crango",
      "brand": "TRAVELER'S CHOICE",
      "SKU": "610562",
      "image": "https://product.hstatic.net/200000117085/product/tim_balo_1_db4b04f179ae4f9ba1f7b983816953cb_master.jpg",
      "category": "Balo",
      "type" : "Balo laptop",
      "size": "Balo",
      "color": "#800080",
      "price": 900000,
      "inventory": "Hết hàng",
      "status": "sale",
      "inCart": 0,
      "description": "Mang theo các thiết bị của bạn thật phong cách với chiếc balo laptop Crango. Với một ngăn siêu mềm chuyên dụng để chứa laptop lên đến 16'' và một ngăn để sắp xếp các vật dụng cần thiết như dây nguồn, bộ sạc và danh thiếp ở ngay nơi bạn cần, đây chính là chiếc balo tuyệt vời nhất sẽ theo bạn đi mọi nơi. Nhờ các vách ngăn bên trong, tài liệu của bạn sẽ được giữ cố định, và miếng dán chuyên dụng giữ đèn xe đạp khi bạn đi ra ngoài.",
  },
  {
      "id": 27,
      "name": "Balo laptop 15.6'' Citypak",
      "brand": "DELSEY",
      "SKU": "00391060000",
      "image": "https://product.hstatic.net/200000117085/product/xam_balo_1_f9a63af30c78465093ea74675e453ab4_master.jpg",
      "category": "Balo",
      "type" : "Balo laptop",
      "size": "Balo",
      "color": "#000000",
      "price": 1700000,
      "inventory": "Hết hàng",
      "status": "",
      "inCart": 0,
      "description": "Bộ sưu tập balo Citypak từ thương hiệu Delsey Paris là dòng balo đô thị thiết thực. Có ba kiểu dáng khác nhau để phù hợp với mọi sở thích và yêu cầu, những chiếc balo này được thiết kế để mang đến sự kết hợp giữa sự nhẹ nhàng và dễ dàng sử dụng. Được làm từ vật liệu tái chế, Citypak khuyến khích cách tiếp cận xanh hơn và thân thiện hơn với môi trường trong các hoạt động hàng ngày.",
  },
  {
      "id": 28,
      "name": "Túi dây rút FlowUp",
      "brand": "Wenger",
      "SKU": "610193",
      "image": "https://product.hstatic.net/200000117085/product/xanhduong_balo_1_a8e3770ef75848cdae218d4b819790e6_master.jpg",
      "category": "Balo",
      "type" : "Balo thể thao",
      "size": "Balo",
      "color": "#0000FF",
      "price": 500000,
      "inventory": "Còn hàng",
      "status": "",
      "inCart": 0,
      "description": "Để mang lại sự thuận tiện tối ưu, túi dây rút FlowUp có một thiết kế nhẹ để mang theo số lượng lớn vật dụng và có thể gấp nhỏ lại để cất gọn khi bạn đã hoàn thành các chuyến phiêu lưu trong ngày. Nếu bạn đang đi bộ đường dài, chạy bộ, đạp xe hoặc sinh hoạt hàng ngày, chiếc túi có tích hợp một chiếc kẹp nhỏ để hỗ trợ lưng và vai của bạn, giữ cho dây đeo vai luôn ở đúng vị trí và mang lại sự thoải mái tối đa khi di chuyển.",
  },
  {
      "id": 29,
      "name": "Balo Magna 03",
      "brand": "AMERICAN TOURISTER",
      "SKU": "82O*08103",
      "image": "https://product.hstatic.net/200000117085/product/xam_balo_1_c517ba823aed4b85bb2519a0d0d6b91a_master.jpg",
      "category": "Balo",
      "type" : "Balo thể thao",
      "size": "Balo",
      "color": "#C0C0C0",
      "price": 2000000,
      "inventory": "Còn hàng",
      "status": "",
      "inCart": 0,
      "description": "Balo Magna từ thương hiệu hàng đầu nước Mỹ American Tourister, đem đến làn gió mới cho khách hàng với thiết kế hiện đại và mới lạ. Balo thiên về tính đa dụng: có ngăn chứa laptop 17”, bao trùm chống nước, và độc đáo nhất chính là dây đeo vai trợ lực công nghệ “Tractum Suspension”. Với thiết kế nội thất siêu rộng, Magna hoàn toàn phù hợp cho các chuyến du lịch, mang được nhiều hành lý, nhưng lại vô cùng gọn gàng và nhẹ nhàng.",
  },
  {
      "id": 30,
      "name": "Balo Colton",
      "brand": "AMERICAN TOURISTER",
      "SKU": "HM9*11001",
      "image": "https://product.hstatic.net/200000117085/product/xanhduong_balo_1_1bbc20fc95aa4d3cbefec6f9c81867db_master.jpg",
      "category": "Balo",
      "type" : "Balo thể thao",
      "size": "Balo",
      "color": "#0000FF",
      "price": 1800000,
      "inventory": "Hết hàng",
      "status": "",
      "inCart": 0,
      "description": "Bộ sưu tập Colton là chiếc balo hiện đại sử dụng hàng ngày có thể dùng cho mọi dịp. Chiếc balo này có thiết kế 2 trong 1: túi trước có thể được tháo rời khi bạn chỉ cần mang theo những vật dụng nhỏ. Bên ngoài balo được xử lý chống nước với công nghệ thân thiện với môi trường và không chứa flo. Sắp xếp tất cả thiết bị điện tử của bạn vào balo và không sợ bị ướt trong những ngày mưa. BST Colton có nhiều màu sắc thời trang tuyệt vời.",
  },
  {
      "id": 31,
      "name": "Balo Venturesafe G3 25L",
      "brand": "PACSAFE",
      "SKU": "60545639",
      "image": "https://product.hstatic.net/200000117085/product/xanhduong_balo_1_72b3a204946e46528dcbf055879aeb50_master.jpg",
      "category": "Balo",
      "type" : "Balo du lịch",
      "size": "Balo",
      "color": "#0000FF",
      "price": 3300000,
      "inventory": "Còn hàng",
      "status": "",
      "inCart": 0,
      "description": "Một chiếc balo đa năng cùng bạn đi bất cứ đâu. Với thiết kế cổ điển và bảo mật chống trộm thông minh, chiếc balo thích nghi với nhiều tình huống, cho phép bạn mang theo các thiết bị và laptop 15'' trong tất cả các cuộc hành trình.",
  },
  {
      "id": 32,
      "name": "Balo Venturesafe X18",
      "brand": "PACSAFE",
      "SKU": "60515328",
      "image": "https://product.hstatic.net/200000117085/product/cam_balo_1_a3853b08fd884bb8b443c919acc13e9c_master.jpg",
      "category": "Balo",
      "type" : "Balo du lịch",
      "size": "Balo",
      "color": "#FF9900",
      "price": 3300000,
      "inventory": "Còn hàng",
      "status": "",
      "inCart": 0,
      "description": "Sẵn sàng bước vào chuyến phiêu lưu với chiếc balo gọn nhẹ nhưng đầy đủ tính năng này. Với công nghệ chống trộm thông minh độc quyền từ Pacsafe sẽ bảo vệ chiếc laptop 13'' và tất cả mọi thứ của bạn, bạn sẽ được an toàn để tham gia vào những trải nghiệm mới.",
  },
  {
      "id": 33,
      "name": "Balo Metrosafe X 25L",
      "brand": "PACSAFE",
      "SKU": "30645205",
      "image": "https://product.hstatic.net/200000117085/product/nau_25l_1_2f8f412288ca4b14b443a2432e4caf9c_master.jpg",
      "category": "Balo",
      "type" : "Balo du lịch",
      "size": "Balo",
      "color": "#996600",
      "price": 5500000,
      "inventory": "Còn hàng",
      "status": "",
      "inCart": 0,
      "description": "Một chiếc balo chống trộm rộng rãi nhưng vẫn thoải mái để mang theo và phù hợp với mọi thứ bạn cần cho một ngày năng động. Kích thước balo có thể xách tay lên máy bay và được làm từ nhựa PET tái chế, có ngăn ẩn cho các vật giá trị, nội thất đa năng, kết hợp với các tính năng bảo mật chống trộm thông minh từ Pacsafe.",
  },
  {
      "id": 34,
      "name": "Balo Magna 01",
      "brand": "Carlton",
      "SKU": "82O*54001",
      "image": "https://product.hstatic.net/200000117085/product/xanhla_balo_2_40a045c3b0164b16895412db3f2e1abb_master.jpg",
      "category": "Balo",
      "type" : "Balo du lịch",
      "size": "Balo",
      "color": "#008000",
      "price": 1900000,
      "inventory": "Còn hàng",
      "status": "",
      "inCart": 0,
      "description": "Balo Magna từ thương hiệu hàng đầu nước Mỹ American Tourister, đem đến làn gió mới cho khách hàng với thiết kế hiện đại và mới lạ. Balo thiên về tính đa dụng: có ngăn chứa laptop 17”, bao trùm chống nước, và độc đáo nhất chính là dây đeo vai trợ lực công nghệ “Tractum Suspension”. Với thiết kế nội thất siêu rộng, Magna hoàn toàn phù hợp cho các chuyến du lịch, mang được nhiều hành lý, nhưng lại vô cùng gọn gàng và nhẹ nhàng.",
  },
  {
      "id": 35,
      "name": "Balo double front Enpria - E",
      "brand": "SAMSONITE",
      "SKU": "HK9*09005",
      "image": "https://product.hstatic.net/200000117085/product/den_balo_1_9a17640159d84d54b969b8b35875ca26.jpg",
      "category": "Balo",
      "type" : "Balo doanh nhân",
      "size": "Balo",
      "color": "#000000",
      "price": 3000000,
      "inventory": "Còn hàng",
      "status": "",
      "inCart": 0,
      "description": "Samsonite ra mắt bộ sưu tập balo chuyên dụng Enpria - E luôn đồng hành cùng nhịp sống hàng ngày của bạn, cho dù đó là để đi làm hàng ngày, đi học, hoạt động thể thao hay một chuyến du lịch ngắn ngày.",
  },
  {
      "id": 36,
      "name": "Balo Vectura Evo 14.1''",
      "brand": "SAMSONITE",
      "SKU": "CS3*09008",
      "image": "https://product.hstatic.net/200000117085/product/xanhduong_balo_1_a1c1864cbc3e46c3bbe08345cc8693f4_master.jpg",
      "category": "Balo",
      "type" : "Balo doanh nhân",
      "size": "Balo",
      "color": "#0000FF",
      "price": 4200000,
      "inventory": "Hết hàng",
      "status": "",
      "inCart": 0,
      "description": "Thiết kế hữu dụng, thông minh và khối lượng nhẹ là những nét nổi bật của bộ sưu tập Vectura Evo, sự phát triển cuối cùng của một trong những bộ sưu tập thành công và bán chạy nhất của Samsonite, với thiết kế hiện đại cùng với chức năng và tổ chức tiên tiến, như cổng USB tích hợp mới.",
  },
  {
      "id": 37,
      "name": "Balo/ túi đeo vai Urban Packer M",
      "brand": "SAMSONITE",
      "SKU": "HU5*09003",
      "image": "https://product.hstatic.net/200000117085/product/den_balo_1_30971d1bd4fe4bc9b4481ad6c94a7535_0dd03090555a444ebe14bc26c55d26c4_master.jpg",
      "category": "Balo",
      "type" : "Balo doanh nhân",
      "size": "Balo",
      "color": "#000000",
      "price": 6200000,
      "inventory": "Hết hàng",
      "status": "",
      "inCart": 0,
      "description": "Đáp ứng những yêu cầu về một bộ sưu tập bắt kịp với một thế giới luôn thay đổi, chiếc balo/ túi đeo vai Urban Packer đã được thiết kế cho hiện tại và tương lai. Với chất liệu vải kháng khuẩn, ngăn đựng khẩu trang chuyên dụng, nhiều túi đựng các vật dụng cá nhân và ngăn chứa bảo vệ laptop 15.6'', chiếc balo này là người bạn đồng hành đáng tin cậy cho những chuyến du lịch hàng ngày.",
  },
  {
      "id": 38,
      "name": "Balo Biena2 62556",
      "brand": "SAMSONITE",
      "SKU": "62556-01",
      "image": "https://product.hstatic.net/200000117085/product/den_balo_1_10bacbd71386492389723a8525625a0f_master.jpg",
      "category": "Balo",
      "type" : "Balo doanh nhân",
      "size": "Balo",
      "color": "#000000",
      "price": 4600000,
      "inventory": "Còn hàng",
      "status": "",
      "inCart": 0,
      "description": "Bộ sưu tập ace. Biena2 là dòng sản phẩm 'Work Style Beauties Series', một chiếc túi công sở thanh lịch, tinh tế dành cho các nữ doanh nhân thành đạt.",
  },
  {
      "id": 39,
      "name": "Balo Carter",
      "brand": "AMERICAN TOURISTER",
      "SKU": "GT3*26001",
      "image": "https://product.hstatic.net/200000117085/product/cam_balo_1_7ae032d63af044d2b8ea91e66e94d1ca_master.jpg",
      "category": "Balo",
      "type" : "Balo thời trang",
      "size": "Balo",
      "color": "#FFFF00",
      "price": 1200000,
      "inventory": "Còn hàng",
      "status": "",
      "inCart": 0,
      "description": "Một cái balo không chỉ là một cái túi. Đó là một nơi lưu trữ di động. Và đó còn là phản ánh của sự quan tâm tới những vật dụng bạn đã lựa chọn để cất giữ trong balo. Bộ sưu tập balo Carter sử dụng hàng ngày với thiết kế hiện đại, sử dụng chất liệu thân thiện môi trường nhưng vẫn bảo đảm chống thấm nước. Tất cả các thiết bị điện tử thông minh của bạn sẽ không sợ bị ướt trong những ngày mưa. Balo Carter lấy cảm hứng ngoài trời với nhiều màu sắc đẹp mắt, thể hiện cá tính của bạn.",
  },
  {
      "id": 40,
      "name": "Balo Carter",
      "brand": "AMERICAN TOURISTER",
      "SKU": "SKU: GT3*21001",
      "image": "https://product.hstatic.net/200000117085/product/dobam_balo_1_44c633a1bb484dfb9a62d3e4209f932d_master.jpg",
      "category": "Balo",
      "type" : "Balo thời trang",
      "size": "Balo",
      "color": "#800000",
      "price": 1200000,
      "inventory": "Còn hàng",
      "status": "",
      "inCart": 0,
      "description": "Một cái balo không chỉ là một cái túi. Đó là một nơi lưu trữ di động. Và đó còn là phản ánh của sự quan tâm tới những vật dụng bạn đã lựa chọn để cất giữ trong balo. Bộ sưu tập balo Carter sử dụng hàng ngày với thiết kế hiện đại, sử dụng chất liệu thân thiện môi trường nhưng vẫn bảo đảm chống thấm nước. Tất cả các thiết bị điện tử thông minh của bạn sẽ không sợ bị ướt trong những ngày mưa. Balo Carter lấy cảm hứng ngoài trời với nhiều màu sắc đẹp mắt, thể hiện cá tính của bạn.",
  },
  {
      "id": 41,
      "name": "Balo trẻ em Woodle NXT 01 - Hippo",
      "brand": "AMERICAN TOURISTER",
      "SKU": "FM3*08001",
      "image": "https://product.hstatic.net/200000117085/product/xam_hippo_1_264ccb48d57f4caf91eaa843564f02f3_304fe78738e44cdda223cc39c112ec09_master.jpg",
      "category": "Balo",
      "type" : "Balo trẻ em",
      "size": "Balo",
      "color": "#0000FF",
      "price": 900000,
      "inventory": "Còn hàng",
      "status": "",
      "inCart": 0,
      "description": "Balo Woodle NXT từ thương hiệu American Tourister với thiết kế mang phong cách các loại động vật mà trẻ em yêu thích: Hà mã đáng yêu và Sư tử dễ thương. Đây là một sự lựa chọn hoàn hảo của những đứa trẻ cho một kỳ nghỉ vui vẻ.",
  },
  {
      "id": 42,
      "name": "Balo trẻ em Tiddle NXT 03",
      "brand": "AMERICAN TOURISTER",
      "SKU": "FM4*01003",
      "image": "https://product.hstatic.net/200000117085/product/xanhduong_balo_1_6162294d8fc14ca295ed249386bbec42_725e55f5ded04a769ed6d2d5c370cebe_master.jpg",
      "category": "Balo",
      "type" : "Balo trẻ em",
      "size": "Balo",
      "color": "#0000FF",
      "price": 1100000,
      "inventory": "Còn hàng",
      "status": "",
      "inCart": 0,
      "description": "Bộ sưu tập balo Tiddle NXT là lựa chọn hoàn hảo dành cho trẻ lứa tuổi tiểu học dễ thương và đầy sắc màu. Với nhiều hình in và họa tiết khác nhau, mỗi chiếc balo cho phép những đứa trẻ thể hiện cá tính và phong cách thực sự của họ.",
  },
  {
      "id": 43,
      "name": "Balo Sliffeme Heather 11012",
      "brand": "ACE. TOKYO",
      "SKU": "11012-05",
      "image": "https://product.hstatic.net/200000117085/product/be_balo_1_c084be53e17a46a0802f100af473f548_master.jpg",
      "category": "Balo",
      "type" : "Balo doanh nhân",
      "size": "Balo",
      "color": "#996600",
      "price": 5200000,
      "inventory": "Hết hàng",
      "status": "",
      "inCart": 0,
      "description": "Bộ sưu tập Sliffeme Heather là dòng sản phẩm 'Work Style Beauties Series', một chiếc balo công sở có thiết kế vuông vắn, gọn gàng và tiện dụng, lý tưởng để sử dụng hàng ngày dành cho các nữ doanh nhân thành đạt. Mặc dù hình thức nhỏ gọn nhưng khả năng lưu trữ cao và tất cả các chức năng thiết yếu dành cho công việc kinh doanh.",
  },
  {
      "id": 44,
      "name": "Balo Biena2 62555",
      "brand": "Kamiliant",
      "SKU": "62555-01",
      "image": "https://product.hstatic.net/200000117085/product/xanhduong_balo_1_f7da20e7493e42caa4dbb31568c468e8_master.jpg",
      "category": "Balo",
      "type" : "Balo doanh nhân",
      "size": "Balo",
      "color": "#0000FF",
      "price": 3800000,
      "inventory": "Hết hàng",
      "status": "",
      "inCart": 0,
      "description": "Bộ sưu tập ace. Biena2 là dòng sản phẩm 'Work Style Beauties Series', một chiếc túi công sở thanh lịch, tinh tế dành cho các nữ doanh nhân thành đạt.",
  },
  {
      "id": 45,
      "name": "Túi du lịch Minter",
      "brand": "SAMSONITE",
      "SKU": "HH5*74005",
      "image": "https://product.hstatic.net/200000117085/product/xanhneon_tuidulich_1_8c0d7b53ed7a42bc9b301e57fe257b49_master.jpg",
      "category": "Túi xách",
      "type" : "Túi du lịch",
      "size": "Túi du lịch",
      "color": "#008000",
      "price": 3200000,
      "inventory": "Còn hàng",

      "inCart": 0,
      "description": "Thiết kế tối giản, sang trọng và được chế tạo với công nghệ vải RECYCLEX™, bộ sưu tập Minter từ Samsonite chính là sản phẩm hoàn hảo dành cho những du khách hiện đại và có ý thức với môi trường. Chiếc túi du lịch vỏ nhựa mới của bộ sưu tập Minter với các đường rãnh dọc tinh xảo và thanh logo dài bằng nhôm chạy ngang thân thể hiện sự sang trọng và tinh tế. Góp phần bảo vệ môi trường với lớp lót nội thất bằng vải jacquard chất lượng cao được tái chế từ 100% chai PET.",
      "status": "new",
  },
  {
      "id": 46,
      "name": "Túi du lịch Willcarl",
      "brand": "ACE. TOKYO",
      "SKU": "5560900-05",
      "image": "https://product.hstatic.net/200000117085/product/tim_tuixach_1_51896b64e1884f568a2c6cd7facd7e4f_master.jpg",
      "category": "Túi xách",
      "type" : "Túi du lịch",
      "size": "Túi du lịch",
      "color": "#800080",
      "price": 4500000,
      "inventory": "Hết hàng",
      "inCart": 0,
      "description": "Một chiếc túi xách hoàn hảo để sử dụng cho một chuyến du lịch. Được làm bằng chất liệu nhẹ với họa tiết jacquard thanh lịch. Các ngăn có khóa kéo ở mặt trước và mặt sau của khoang chứa chính có độ mở tốt đủ lớn để vừa các sách hướng dẫn khổ A4, kèm theo một chiếc ví nhỏ để chứa giấy tờ và những vật có giá trị. Có hai túi ở bên hông. Sản phẩm đi kèm với dây đeo có thể tháo rời để sử dụng như một chiếc túi đeo vai. Tích hợp tính năng đai gài cần đẩy vali giúp bạn rảnh tay khi di chuyển.",
      "status": "new",
  },
  {
      "id": 47,
      "name": "Túi duffle kéo Raspail",
      "brand": "DELSEY",
      "SKU": "00328921000",
      "image": "https://product.hstatic.net/200000117085/product/do_tuikeo_1_5d0dfef8f20f4c629796ea70ce1849cc_master.jpg",
      "category": "Túi xách",
      "type" : "Túi du lịch",
      "size": "Túi du lịch",
      "color": "#800000",
      "price": 4800000,
      "inventory": "Hết hàng",
      "inCart": 0,
      "description": "Bộ sưu tập Delsey Raspail được thiết kế dành riêng cho những du khách yêu thích phiêu lưu mạo hiểm. Những chiếc túi được làm từ chất liệu chống nước này sẽ đi khắp mọi nơi cùng bạn, và giữ cho hành lý được bảo vệ trong bất kể điều kiện nào. Với thiết kế thực dụng, có nhiều tay cầm và túi để đồ, bộ sưu tập Raspail từ thương hiệu Delsey Paris này sẽ giúp bạn hoàn toàn yên tâm trong tất cả các chuyến hành trình.",
      "status": "sale",
  },
  {
      "id": 48,
      "name": "Túi đeo chéo Cruise On The Go",
      "brand": "PACSAFE",
      "SKU": "20705329",
      "image": "https://product.hstatic.net/200000117085/product/tim_tuideocheo_1_581e5e095de045d0a2a5f12a3e44229a_master.jpg",
      "category": "Túi xách",
      "type" : "Túi đeo chéo",
      "size": "Túi đeo chéo",
      "color": "#800080",
      "price": 1800000,
      "inventory": "Còn hàng",
      "inCart": 0,
      "description": "Chiếc túi đeo chéo Cruise On The Go này là một phụ kiện tuyệt vời khi đi du lịch, phù hợp với các nhu yếu phẩm như điện thoại, túi trang điểm và nhiều thứ khác. Tất cả mọi thứ được sắp xếp trong túi gọn gàng, được bảo vệ bởi các tính năng bảo mật chống trộm thông minh từ Pacsafe.",
      "status": "sale",
  },
  {
      "id": 49,
      "name": "Túi đeo chéo Multitide 67581",
      "brand": "ACE. TOKYO",
      "SKU": "67581-01",
      "image": "https://product.hstatic.net/200000117085/product/den_tuideocheo_1_dacb79169e7242cb9cb16d08fb5979c1_master.jpg",
      "category": "Túi xách",
      "type" : "Túi đeo chéo",
      "size": "Túi đeo chéo",
      "color": "#000000",
      "price": 3000000,
      "inventory": "Còn hàng",
      "status": "",
      "inCart": 0,
      "description": "Multitide là một bộ sưu tập balo và túi đeo chéo công sở được trang bị khả năng chống thấm nước, nhờ được làm bằng vật liệu và cấu trúc khiến nước mưa và bụi khó xâm nhập, cùng với thiết kế giúp tối ưu sự thoải mái khi sử dụng.",
  },
  {
      "id": 50,
      "name": "Túi đeo chéo Urban Packer",
      "brand": "SAMSONITE",
      "SKU": "HU5*09001",
      "image": "https://product.hstatic.net/200000117085/product/den_tuideocheo_1_3e210faba4cc42c4871ea3149c152ff9_a04aa6d5109e4dbeb129787e3066bafc_master.jpg",
      "category": "Túi xách",
      "type" : "Túi đeo chéo",
      "size": "Túi đeo chéo",
      "color": "#000000",
      "price": 2100000,
      "inventory": "Hết hàng",
      "status": "",
      "inCart": 0,
      "description": "Đáp ứng những yêu cầu về một bộ sưu tập bắt kịp với một thế giới luôn thay đổi, chiếc túi đeo chéo Urban Packer đã được thiết kế cho hiện tại và tương lai. Với chất liệu vải kháng khuẩn, ngăn đựng khẩu trang chuyên dụng, nhiều túi đựng các vật dụng cá nhân, chiếc túi này là người bạn đồng hành đáng tin cậy cho những chuyến du lịch hàng ngày.",
  },
  {
      "id": 51,
      "name": "Túi tote Batison",
      "brand": "CARLTON",
      "SKU": "QL6*09002",
      "image": "https://product.hstatic.net/200000117085/product/den_tote_1_12659b0aca0c4ef88b738db0e15ed15a_659db535918a4b00ac52848d06aeb9cb_master.jpg",
      "category": "Túi xách",
      "type" : "Túi đeo chéo",
      "size": "Túi đeo chéo",
      "color": "#000000",
      "price": 3800000,
      "inventory": "Còn hàng",
      "status": "",
      "inCart": 0,
      "description": "Bộ sưu tập Batison là dòng sản phẩm dành riêng cho phái đẹp với phong cách thiết kế tối giản.",
  },
  {
      "id": 52,
      "name": "Túi đeo chéo Latha",
      "brand": "CARLTON",
      "SKU": "QL0*01002",
      "image": "https://product.hstatic.net/200000117085/product/xanhnhat_minicross_1_3a45e87e4a304b8195f202fdcbd609de_f9fb2c8b3bdc446c88293635077849f4_master.jpg",
      "category": "Túi xách",
      "type" : "Túi đeo chéo",
      "size": "Túi đeo chéo",
      "color": "#0000FF",
      "price": 3200000,
      "inventory": "Còn hàng",
      "status": "",
      "inCart": 0,
      "description": "Samsonite Red LATHA là dòng túi sử dụng hàng ngày, có thể chứa những vật dụng cần thiết một cách tiện lợi và đơn giản.",
  },
  {
      "id": 53,
      "name": "Túi đeo chéo Dumfri",
      "brand": "CARLTON",
      "SKU": "QK5*83002",
      "image": "https://product.hstatic.net/200000117085/product/be_slingbag_1_19f33ac8b1c243b5b87a2960224cbafe_ca745391f7be488e82f8523cff4ad9dd_master.jpg",
      "category": "Túi xách",
      "type" : "Túi đeo chéo",
      "size": "Túi đeo chéo",
      "color": "#996600",
      "price": 2200000,
      "inventory": "Còn hàng",
      "status": "",
      "inCart": 0,
      "description": "Dumfri là bộ sưu tập balo và túi xách sử dụng hàng ngày với thiết kế phong cách đường phố tự do và phóng khoáng, với các chi tiết vải được nhấn mạnh nổi bật.",
  },
  {
      "id": 54,
      "name": "Túi đeo Deluxe Security Pouch",
      "brand": "KAMILIANT",
      "SKU": "31171901",
      "image": "https://product.hstatic.net/200000117085/product/den_tuideoco_1_e027eb75746c4ae8812bf8d5b9412857_master.jpg",
      "category": "Túi xách",
      "type" : "Túi đeo chéo",
      "size": "Túi đeo chéo",
      "color": "#000000",
      "price": 1000000,
      "inventory": "Còn hàng",
      "status": "",
      "inCart": 0,
      "description": "Cho dù bạn đi du lịch một mình hoặc với bạn bè và gia đình, hãy sắp xếp tất cả giấy tờ tùy thân cần thiết vào chiếc túi đeo bảo mật Deluxe Security Pouch đến từ thương hiệu Victorinox (Thụy Sỹ) và đeo nó bên mình để thuận tiện và bảo mật tối đa. Các giấy tờ của bạn dễ dàng truy cập, nhưng chỉ cho bạn và chỉ một mình bạn. Đây là sản phẩm sẽ luôn đồng hành cùng bạn trên mọi chuyến hành trình.",
  },
  {
      "id": 55,
      "name": "Túi clutch Chatelet Air 2.0",
      "brand": "DELSEY",
      "SKU": "00167611515",
      "image": "https://product.hstatic.net/200000117085/product/hong_clutch_1_6a0cc83770854c17a92222c47af6ea59_master.jpg",
      "category": "Túi xách",
      "type" : "Túi đeo vai",
      "size": "Túi đeo vai",
      "color": "#FF00FF",
      "price": 3400000,
      "inventory": "Hết hàng",
      "status": "",
      "inCart": 0,
      "description": "Bộ sưu tập Chatelet Air 2.0 là biểu tượng của văn hóa và sự sang trọng của nước Pháp. Thiết kế của bộ sưu tập gợi lên những hình ảnh kiến trúc truyền thống Paris. Những đường nét độc đáo gợi nhớ đến thiết kế cổ điển của hành lý trong quá khứ, đồng thời mang đến cho bộ sưu tập một vẻ ngoài đương đại.",
  },
  {
      "id": 56,
      "name": "Túi mini reporter 2-cpt Picpus",
      "brand": "TRAVELER'S CHOICE",
      "SKU": "3354113-10",
      "image": "https://product.hstatic.net/200000117085/product/den_tuitablet101in_1_0df845ad38ab478e989df5aae9f75e66.jpg",
      "category": "Túi xách",
      "type" : "Túi đeo vai",
      "size": "Túi đeo vai",
      "color": "#000000",
      "price": 1400000,
      "inventory": "Hết hàng",
      "status": "",
      "inCart": 0,
      "description": "Túi đeo Picpus mini reporter 10.1'' này sẽ là phụ kiện hàng ngày yêu thích của bạn. Bên trong túi có ngăn lưu trữ an toàn cho máy tính bảng 10.1'' và các phụ kiện điện tử khác. . Đây chính là chiếc túi cần thiết cho tất cả các chuyến hành trình của bạn!",
  },
  {
      "id": 57,
      "name": "Túi mini 2-cpt Picpus",
      "brand": "TRAVELER'S CHOICE",
      "SKU": "3354111-00*05001",
      "image": "https://product.hstatic.net/200000117085/product/den_tuimini_1_cfbf37d3f78845c2a6d3b049d3ca49cd_master.jpg",
      "category": "Túi xách",
      "type" : "Túi đeo vai",
      "size": "Túi đeo vai",
      "color": "#000000",
      "price": 1400000,
      "inventory": "Hết hàng",
      "status": "",
      "inCart": 0,
      "description": "Túi mini Picpus đảm bảo sự thoải mái tối ưu với dây đeo vai được thiết kế đặc biệt để sử dụng thường xuyên. Với 2 ngăn chứa rộng rãi có thể lưu trữ tất cả phụ kiện và chiếc tablet của bạn. Đây chính là chiếc túi cần phải có cho những chuyến hành trình!",
  },
  {
      "id": 58,
      "name": "Túi flat mini reporter Picpus",
      "brand": "TRAVELER'S CHOICE",
      "SKU": "3354109-00",
      "image": "https://product.hstatic.net/200000117085/product/den_tuitablet97in_1_fa6ceb2ece3e42c3bdc5c7d63e1651a5_master.jpg",
      "category": "Túi xách",
      "type" : "Túi đeo vai",
      "size": "Túi đeo vai",
      "color": "#000000",
      "price": 1200000,
      "inventory": "Còn hàng",
      "status": "",
      "inCart": 0,
      "description": "Túi mini Picpus đảm bảo sự thoải mái tối ưu với dây đeo vai được thiết kế đặc biệt để sử dụng thường xuyên. Với 2 ngăn chứa rộng rãi có thể lưu trữ tất cả phụ kiện và chiếc tablet của bạn. Đây chính là chiếc túi cần phải có cho những chuyến hành trình!",
  },
  {
      "id": 59,
      "name": "Túi tote Batison",
      "brand": "WENGER",
      "SKU": "QL6*09002",
      "image": "https://product.hstatic.net/200000117085/product/den_tote_1_12659b0aca0c4ef88b738db0e15ed15a_659db535918a4b00ac52848d06aeb9cb_master.jpg",
      "category": "Túi xách",
      "type" : "Túi xách tay",
      "size": "Túi xách tay",
      "color": "#000000",
      "price": 3800000,
      "inventory": "Còn hàng",
      "status": "",
      "inCart": 0,
      "description": "Bộ sưu tập Batison là dòng sản phẩm dành riêng cho phái đẹp với phong cách thiết kế tối giản.",
  },
  {
      "id": 60,
      "name": "Túi xách Biena2 62554",
      "brand": "WENGER",
      "SKU": "62554-01",
      "image": "https://product.hstatic.net/200000117085/product/den_tuixach_1_e923304b694f4c6f9fbf21960a4e19d4_master.jpg",
      "category": "Túi xách",
      "type" : "Túi xách tay",
      "size": "Túi xách tay",
      "color": "#000000",
      "price": 5800000,
      "inventory": "Còn hàng",
      "status": "",
      "inCart": 0,
      "description": "Bộ sưu tập Batison là dòng sản phẩm dành riêng cho phái đẹp với phong cách thiết kế tối giản.",
  },
  {
      "id": 61,
      "name": "Túi xách My Wenger",
      "brand": "WENGER",
      "SKU": "CG1*50001",
      "image": "https://product.hstatic.net/200000117085/product/do_tuixachtay_1_36d0ec20366e4e89a8c8a8321230db64_master.jpg",
      "category": "Túi xách",
      "type" : "Túi xách tay",
      "size": "Túi xách tay",
      "color": "#FF00FF",
      "price": 4900000,
      "inventory": "Còn hàng",
      "status": "",
      "inCart": 0,
      "description": "Cổ điển, tối giản và hiện đại. BST My Wenger mang đến phong cách cá nhân hoàn hảo cho phái đẹp. Đơn sắc với các đường vân tự nhiên trên sản phẩm kết hợp thiết kế cột thắt cách điệu tạo điểm nhấn mang phong cách sang trọng, quý phái.",
  },
  {
      "id": 62,
      "name": "Túi đeo vai Mia",
      "brand": "AMERICAN TOURISTER",
      "SKU": "HL6*90003",
      "image": "https://product.hstatic.net/200000117085/product/nude_tuideo_1_d191c650b8dd479c8b7e3e2771ecfe7a_master.jpg",
      "category": "Túi xách",
      "type" : "Túi đeo vai",
      "size": "Túi đeo vai",
      "color": "#996600",
      "price": 1100000,
      "inventory": "Còn hàng",
      "status": "",
      "inCart": 0,
      "description": "Mia từ thương hiệu American Tourister là bộ sưu tập hàng ngày với trọng lượng nhẹ dành cho những bạn nữ trẻ và năng động. Có 3 màu thời trang dễ dàng phù hợp với trang phục của bạn.",
  },
  {
      "id": 63,
      "name": "Túi đeo vai Kris",
      "brand": "AMERICAN TOURISTER",
      "SKU": "HC6*40001",
      "image": "https://product.hstatic.net/200000117085/product/hong_tuitienich_1_c72b779a17f44910a49ff300c2ad3176_master.jpg",
      "category": "Túi xách",
      "type" : "Túi đeo vai",
      "size": "Túi đeo vai",
      "color": "#FF00FF",
      "price": 860000,
      "inventory": "Còn hàng",
      "status": "",
      "inCart": 0,
      "description": "Được thiết kế tối giản và dễ dàng truy cập, túi đeo vai Kris được hoàn thiện tinh tế bằng vật liệu chống thấm nước bền chắc để bảo vệ các vật dụng thiết yếu của bạn. Với khối lượng nhẹ và khả năng lưu trữ lớn, túi có thể dễ dàng mang theo mọi nơi trong khi vẫn giữ các vật dụng cá nhân của bạn được ngăn nắp. Ngăn chính có đệm bảo vệ các thiết bị điện tử khi đang di chuyển. Kris là sự lựa chọn hoàn hảo cho các du khách hiện đại.",
  },
  {
      "id": 64,
      "name": "Cặp xách Speedair",
      "brand": "AMERICAN TOURISTER",
      "SKU": "23Z*09010",
      "image": "https://product.hstatic.net/200000117085/product/den_cap3way_1_74b69a9309c94b4783f226242eb929f5_master.jpg",
      "category": "Túi xách",
      "type" : "Túi đeo vai",
      "size": "Túi đeo vai",
      "color": "#000000",
      "price": 2200000,
      "inventory": "Hết hàng",
      "status": "",
      "inCart": 0,
      "description": "BST Speedair từ American cung cấp trọn bộ cặp táp, balo cho các quý ông công sở. Nội thất nhiều ngăn với ngăn chứa riêng kèm lớp đệm cho laptop 15.4' 'và tablet đến 10.1'' tiện dụng cho các chuyến công tác hay những ngày làm việc thông thường. ",
  },
  {
      "id": 65,
      "name": "Túi tote Biena2 62553",
      "brand": "KAMILIANT",
      "SKU": "62553-01",
      "image": "https://product.hstatic.net/200000117085/product/xanhduong_tuitote_1_fcb2c170d9d44618b03747df77085a55_master.jpg",
      "category": "Túi xách",
      "type" : "Túi xách tay",
      "size": "Túi xách tay",
      "color": "#0000FF",
      "price": 5600000,
      "inventory": "Hết hàng",
      "status": "",
      "inCart": 0,
      "description": "Bộ sưu tập ace. Biena2 là dòng sản phẩm 'Work Style Beauties Series', một chiếc túi công sở thanh lịch, tinh tế dành cho các nữ doanh nhân thành đạt.",
  },
  {
      "id": 66,
      "name": "Bao trùm balo Global TA",
      "brand": "SAMSONITE",
      "SKU": "CO1*09101",
      "image": "https://product.hstatic.net/200000117085/product/den_cover_2_d6483708e8fc4b16bd06c9b32202015e_master.jpg",
      "category": "Phụ kiện",
      "type" : "Bao trùm vali",
      "size": "Bao trùm",
      "color": "#000000",
      "price": 400000,
      "inventory": "Còn hàng",
      "status": "",
      "inCart": 0,
      "description": "Phụ kiện du lịch, bao trùm balo. Có thể gấp gọn để dễ dàng mang theo. Có khả năng không thấm nước. Kích thước: 33 x 18 x 44 cm. Chất liệu: 100% Polyester",
  },
  {
      "id": 67,
      "name": "Bao trùm vali AT II",
      "brand": "SAMSONITE",
      "SKU": "Z19*17041",
      "image": "https://product.hstatic.net/200000117085/product/hong_sizes_1_4b741862f4cd4063b502ff24d2e5c2df_master.jpg",
      "category": "Phụ kiện",
      "type" : "Bao trùm vali",
      "size": "Bao trùm",
      "color": "#FF00FF",
      "price": 420000,
      "inventory": "Còn hàng",
      "status": "",
      "inCart": 0,
      "description": "Phụ kiện du lịch, bao trùm balo. Có thể gấp gọn để dễ dàng mang theo. Có khả năng không thấm nước. Kích thước: 33 x 18 x 44 cm. Chất liệu: 100% Polyester",
  },
  {
      "id": 68,
      "name": "Bao trùm vali Pale Cover (họa tiết)",
      "brand": "TRAVELER'S CHOICE",
      "SKU": "12511-15",
      "image": "https://product.hstatic.net/200000117085/product/xanhnhat_baotrumvali_1_64661a05787d4222b7bb53021253908b_master.jpg",
      "category": "Phụ kiện",
      "type" : "Bao trùm vali",
      "size": "Bao trùm",
      "color": "#0000FF",
      "price": 900000,
      "inventory": "Hết hàng",
      "status": "",
      "inCart": 0,
      "description": "Phụ kiện du lịch, bao trùm balo. Có thể gấp gọn để dễ dàng mang theo. Có khả năng không thấm nước. Kích thước: 33 x 18 x 44 cm. Chất liệu: 100% Polyester",
  },
  {
      "id": 69,
      "name": "Bao trùm vali Pale Cover (họa tiết)",
      "brand": "ACE. TOKYO",
      "SKU": "12511-09",
      "image": "https://product.hstatic.net/200000117085/product/den_cabin5321_1_7f0dc128d3a94be5981118c160df7841.jpg",
      "category": "Phụ kiện",
      "type" : "Bao trùm vali",
      "size": "Bao trùm",
      "color": "#000000",
      "price": 900000,
      "inventory": "Hết hàng",
      "status": "",
      "inCart": 0,
      "description": "Phụ kiện du lịch, bao trùm balo. Có thể gấp gọn để dễ dàng mang theo. Có khả năng không thấm nước. Kích thước: 33 x 18 x 44 cm. Chất liệu: 100% Polyester",
  },
  {
      "id": 70,
      "name": "Mũ len Victorinox Brand Collection Fan Beanie - Red",
      "brand": "KAMILIANT",
      "SKU": "611130",
      "image": "https://product.hstatic.net/200000117085/product/do_beanie_1_eb3d982961a04624ae422f9f706ec112_master.jpg",
      "category": "Phụ kiện",
      "type" : "Mũ/nón",
      "size": "Mũ/nón",
      "color": "#800000",
      "price": 600000,
      "inventory": "Còn hàng",
      "inCart": 0,
      "description": "Một chiếc mũ len dệt kim sành điệu để mang theo trong mọi chuyến phiêu lưu của bạn. Chiếc mũ đội đầu đa năng, dành cho cả nam và nữ này vừa phù hợp để đi bộ đường dài trên các đỉnh núi, vừa được kết hợp với tai nghe và trang phục thể thao năng động của bạn tại phòng tập hoặc ngay cả khi đi dạo vào cuối tuần. Được dệt kim bằng len siêu mềm, chiếc mũ lên Victorinox Brand Collection Fan Beanie có trọng lượng nhẹ nhưng vẫn ấm áp và dễ chịu, có thể cuộn gọn để dễ dàng cất giữ trong vali xách tay hoặc balo của bạn.",
      "status": "new",
  },
  {
      "id": 71,
      "name": "Nón Victorinox Brand Collection 1884 Cap - Black",
      "brand": "CARLTON",
      "SKU": "611025",
      "image": "https://product.hstatic.net/200000117085/product/den_cap_1_43a669016a174eb897b88607497d9f4a_master.jpg",
      "category": "Phụ kiện",
      "type" : "Mũ/nón",
      "size": "Mũ/nón",
      "color": "#000000",
      "price": 1500000,
      "inventory": "Hết hàng",
      "inCart": 0,
      "description": "Cho dù bạn đang sải bước trên đường phố hay đi bộ xuyên quốc gia, việc bảo vệ khuôn mặt của bạn khỏi ánh nắng mặt trời mùa hè sẽ giúp bạn đi được nhiều hơn. Và với chiếc mũ bóng chày cổ điển có đính biểu tượng Victorinox di sản, có thể điều chỉnh và thoáng khí, bạn có thể giữ cho mình luôn tỉnh táo khi thực hiện bất kỳ cuộc phiêu lưu nào",
      "status": "new",
  },
  {
      "id": 72,
      "name": "Mũ len Victorinox Brand Collection Fan Beanie - Dark Grey",
      "brand": "KAMILIANT",
      "SKU": "611132",
      "image": "https://product.hstatic.net/200000117085/product/xam_beanie_1_2648429730a34c5ab46102c894b3ba4c_master.jpg",
      "category": "Phụ kiện",
      "type" : "Mũ/nón",
      "size": "Mũ/nón",
      "color": "#C0C0C0",
      "price": 600000,
      "inventory": "Còn hàng",
      "status": "",
      "inCart": 0,
      "description": "Một chiếc mũ len dệt kim sành điệu để mang theo trong mọi chuyến phiêu lưu của bạn. Chiếc mũ đội đầu đa năng, dành cho cả nam và nữ này vừa phù hợp để đi bộ đường dài trên các đỉnh núi, vừa được kết hợp với tai nghe và trang phục thể thao năng động của bạn tại phòng tập hoặc ngay cả khi đi dạo vào cuối tuần. Được dệt kim bằng len siêu mềm, chiếc mũ lên Victorinox Brand Collection Fan Beanie có trọng lượng nhẹ nhưng vẫn ấm áp và dễ chịu, có thể cuộn gọn để dễ dàng cất giữ trong vali xách tay hoặc balo của bạn.",
  },
  {
      "id": 73,
      "name": "Nón Victorinox Brand Collection 1884 Cap - Red",
      "brand": "CARLTON",
      "SKU": "611024",
      "image": "https://product.hstatic.net/200000117085/product/do_cap_1_43feddab6b72417299b87521f7f2af67_master.jpg",
      "category": "Phụ kiện",
      "type" : "Mũ/nón",
      "size": "Mũ/nón",
      "color": "#800000",
      "price": 1500000,
      "inventory": "Còn hàng",
      "status": "",
      "inCart": 0,
      "description": "Cho dù bạn đang sải bước trên đường phố hay đi bộ xuyên quốc gia, việc bảo vệ khuôn mặt của bạn khỏi ánh nắng mặt trời mùa hè sẽ giúp bạn đi được nhiều hơn. Và với chiếc mũ bóng chày cổ điển có đính biểu tượng Victorinox di sản, có thể điều chỉnh và thoáng khí, bạn có thể giữ cho mình luôn tỉnh táo khi thực hiện bất kỳ cuộc phiêu lưu nào",
  },
  {
      "id": 74,
      "name": "Màng che mắt du lịch",
      "brand": "PACSAFE",
      "SKU": "Z19*01014",
      "image": "https://product.hstatic.net/200000117085/product/xanhduong_bitmat_1_a31051413a5e4d748a914c0aedbf642c_master.jpg",
      "category": "Phụ kiện",
      "type" : "Bịt mắt",
      "size": "Bịt mắt",
      "color": "#0000FF",
      "price": 320000,
      "inventory": "Còn hàng",
      "inCart": 0,
      "description": "Phụ kiện du lịch cao cấp đến từ thương hiệu American Tourister của Mỹ. Bịt mắt Eye Shades với chất liệu cao cấp, sản phẩm siêu nhẹ và có thể giặt dễ dàng mà không làm hư hỏng sản phẩm. Bịt mắt Eye Shades của American Tourister đặc biệt với tính năng mềm mại, mang đến cảm giác thoải mái cho người dùng. Thiết kế tiện dụng giúp tránh ánh sáng. Sản phẩm được làm nên từ loại vải có trọng lượng nhẹ và lớp lót mềm mại, đảm bảo sự êm ái và mang lại giấc ngủ ngon cho bạn. Ngoài ra, Eye Shades còn có dây đai điều chỉnh độ rộng mang đến sự tiện dụng, linh hoạt và thoải mái.",
      "status": "sale",
  },
  {
      "id": 75,
      "name": "Màng che mắt và nút tai Global TA",
      "brand": "PACSAFE",
      "SKU": "CO1*28031",
      "image": "https://product.hstatic.net/200000117085/product/xam_bitmat_1_adf0b27bb65f4d52b0d7bbc291483bd8_master.jpg",
      "category": "Phụ kiện",
      "type" : "Bịt mắt",
      "size": "Bịt mắt",
      "color": "#C0C0C0",
      "price": 560000,
      "inventory": "Còn hàng",
      "inCart": 0,
      "description": "Phụ kiện du lịch cao cấp đến từ thương hiệu American Tourister của Mỹ. Bịt mắt Eye Shades với chất liệu cao cấp, sản phẩm siêu nhẹ và có thể giặt dễ dàng mà không làm hư hỏng sản phẩm. Bịt mắt Eye Shades của American Tourister đặc biệt với tính năng mềm mại, mang đến cảm giác thoải mái cho người dùng. Thiết kế tiện dụng giúp tránh ánh sáng. Sản phẩm được làm nên từ loại vải có trọng lượng nhẹ và lớp lót mềm mại, đảm bảo sự êm ái và mang lại giấc ngủ ngon cho bạn. Ngoài ra, Eye Shades còn có dây đai điều chỉnh độ rộng mang đến sự tiện dụng, linh hoạt và thoải mái.",
      "status": "sale",
  },
  {
      "id": 76,
      "name": "Gối cổ Memory foam",
      "brand": "WENGER",
      "SKU": "604575",
      "image": "https://product.hstatic.net/200000117085/product/xam_goico_1_3d64fe528c974bf082832b852743939e_master.jpg",
      "category": "Phụ kiện",
      "type" : "Gối cổ",
      "size": "Gối cổ",
      "color": "#C0C0C0",
      "price": 440000,
      "inventory": "Hết hàng",
      "status": "",
      "inCart": 0,
      "description": "Ngả lưng thoải mái với gối cổ du lịch Memory foam. Khuôn gối hình chữ U được thiết kế công thái học hoàn hảo với đường nét của cổ và hỗ trợ thiết yếu cho cổ của bạn khi bạn ngủ hoặc thư giãn trong khi di chuyển. Được làm từ chất liệu mềm mại, thoáng khí giúp bạn luôn mát mẻ và thoải mái, để bạn có thể đến nơi với cảm giác sảng khoái và sẵn sàng cho những trải nghiệm mới.",
  },
  {
      "id": 77,
      "name": "Gối cổ du lịch Delsey",
      "brand": "DELSEY",
      "SKU": "3940260-11",
      "image": "https://product.hstatic.net/200000117085/product/xam_goico_1_71950af721774a76a32d690608e978c1.jpg",
      "category": "Phụ kiện",
      "type" : "Gối cổ",
      "size": "Gối cổ",
      "color": "#C0C0C0",
      "price": 350000,
      "inventory": "Còn hàng",
      "status": "",
      "inCart": 0,
      "description": "Ngả lưng thoải mái với gối cổ du lịch Memory foam. Khuôn gối hình chữ U được thiết kế công thái học hoàn hảo với đường nét của cổ và hỗ trợ thiết yếu cho cổ của bạn khi bạn ngủ hoặc thư giãn trong khi di chuyển. Được làm từ chất liệu mềm mại, thoáng khí giúp bạn luôn mát mẻ và thoải mái, để bạn có thể đến nơi với cảm giác sảng khoái và sẵn sàng cho những trải nghiệm mới.",
  },
  {
      "id": 78,
      "name": "Gối cổ Inflatable",
      "brand": "AMERICAN TOURISTER",
      "SKU": "Z19*28009",
      "image": "https://product.hstatic.net/200000117085/product/xam_goihoi_1_ac309de779a64719ab6ef182bbf7741c.jpg",
      "category": "Phụ kiện",
      "type" : "Gối cổ",
      "size": "Gối cổ",
      "color": "#C0C0C0",
      "price": 210000,
      "inventory": "Còn hàng",
      "status": "",
      "inCart": 0,
      "description": "Ngả lưng thoải mái với gối cổ du lịch Memory foam. Khuôn gối hình chữ U được thiết kế công thái học hoàn hảo với đường nét của cổ và hỗ trợ thiết yếu cho cổ của bạn khi bạn ngủ hoặc thư giãn trong khi di chuyển. Được làm từ chất liệu mềm mại, thoáng khí giúp bạn luôn mát mẻ và thoải mái, để bạn có thể đến nơi với cảm giác sảng khoái và sẵn sàng cho những trải nghiệm mới.",
  },
  {
      "id": 79,
      "name": "Gối cổ du lịch",
      "brand": "AMERICAN TOURISTER",
      "SKU": "Z19*13062",
      "image": "https://product.hstatic.net/200000117085/product/xam_goixop_1_fcc80688ce7a43b0b19ba8fec9797661.jpg",
      "category": "Phụ kiện",
      "type" : "Gối cổ",
      "size": "Gối cổ",
      "color": "#000000",
      "price": 520000,
      "inventory": "Còn hàng",
      "status": "",
      "inCart": 0,
      "description": "Ngả lưng thoải mái với gối cổ du lịch Memory foam. Khuôn gối hình chữ U được thiết kế công thái học hoàn hảo với đường nét của cổ và hỗ trợ thiết yếu cho cổ của bạn khi bạn ngủ hoặc thư giãn trong khi di chuyển. Được làm từ chất liệu mềm mại, thoáng khí giúp bạn luôn mát mẻ và thoải mái, để bạn có thể đến nơi với cảm giác sảng khoái và sẵn sàng cho những trải nghiệm mới.",
  },
  {
      "id": 80,
      "name": "Ví du lịch Global TA",
      "brand": "SAMSONITE",
      "SKU": "CO1*00084",
      "image": "https://product.hstatic.net/200000117085/product/do_virfid_1_fe3e724c814f436a9cee50d3ca735ace.jpg",
      "category": "Phụ kiện",
      "type" : "Ví",
      "size": "Ví",
      "color": "#FF00FF",
      "price": 920000,
      "inventory": "Còn hàng",
      "status": "",
      "inCart": 0,
      "description": "Bộ sưu tập phụ kiện du lịch Travel Accessories đến từ Samsonite với các thiết kế và màu sắc độc đáo, cung cấp các giải pháp thiết thực cho du khách trong quá trình di chuyển. Với thiết kế mới mẻ và năng động, những phụ kiện mới này đáp ứng mọi nhu cầu của du khách hiện đại. Mỗi phụ kiện du lịch đã được đáp ứng qua các bài kiểm tra độ bền theo chuẩn nghiêm ngặt của Samsonite, mang đến cho du khách tất cả sự tự tin cũng như phong cách.",
  },
  {
      "id": 81,
      "name": "Ví da Coin purse",
      "brand": "ACE. TOKYO",
      "SKU": "67T*09005",
      "image": "https://product.hstatic.net/200000117085/product/den_vida_1_92cac79b1b754c76b1120dcebb1448a8.jpg",
      "category": "Phụ kiện",
      "type" : "Ví",
      "size": "Ví",
      "color": "#000000",
      "price": 2200000,
      "inventory": "Hết hàng",
      "status": "",
      "inCart": 0,
      "description": "Bộ sưu tập ví da thông minh của ACE. TOKYO được trang bị chế độ vô hiệu RFID giúp bảo vệ việc thanh toán qua thẻ tín dụng (không chủ ý) và thông tin cá nhân trên hộ chiếu điện tử. Bằng cách bổ sung một lớp kim loại đặc biệt giữa hai lớp vải bên trong ví giúp chiếc ví của bạn thoát khỏi sự đánh cắp thông tin mật khi các tên trộm dùng thiết bị quét RFID lướt ngang qua bạn.",
  },
  {
      "id": 82,
      "name": "Ví Leah - Small",
      "brand": "ACE. TOKYO",
      "SKU": "HB8*09007",
      "image": "https://product.hstatic.net/200000117085/product/den_vi_1_5d874645c8464c6484ef74d0037e23f8_7b73ddd708fd42b28fd9b3f4e0ff80ec.jpg",
      "category": "Phụ kiện",
      "type" : "Ví",
      "size": "Ví",
      "color": "#000000",
      "price": 3000000,
      "inventory": "Còn hàng",
      "status": "",
      "inCart": 0,
      "description": "Bộ sưu tập ví da thông minh của ACE. TOKYO được trang bị chế độ vô hiệu RFID giúp bảo vệ việc thanh toán qua thẻ tín dụng (không chủ ý) và thông tin cá nhân trên hộ chiếu điện tử. Bằng cách bổ sung một lớp kim loại đặc biệt giữa hai lớp vải bên trong ví giúp chiếc ví của bạn thoát khỏi sự đánh cắp thông tin mật khi các tên trộm dùng thiết bị quét RFID lướt ngang qua bạn.",
  },
]

const search = document.getElementById('search');

const app = {
  // Hàm dùng để định nghĩa
  // Format price thành currency
  formatter: function (amount) {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(amount);
  },

  renderSlideMenu: function(){
    let html = '';
    let sliderOwl = document.querySelector('.slider-owl');
    bannerImg.map(function(item){
      const {advertise} = item;
      if (typeof advertise === "string") {
        html += 
        `
        <div class="item">
          <a href="#">
            <picture>
              <img src="${advertise}" alt="" />
            </picture>
          </a>
        </div>
        `
        sliderOwl.innerHTML = html;
      }
    })
  },

  renderLogo: function(){
    let html = '';
    const galleryBrand = document.querySelector('.list-gallery-brand');
    bannerImg.map(function(item){
      const {logo} = item;
      html += 
      `
        <div class="col-md-brand">
          <a href="">
            <picture>
              <img src="${logo}" alt="" />          
            </picture>
          </a>
        </div>
      `
      galleryBrand.innerHTML = html;
    });
  },

  renderProducts: function () {
    const _this = this;
    let html = "";
    all_products.map(function (item, index) {
      let { id, name, price, brand, description, image, category, status, SKU, inventory, size, color } = item;
      let priceFormat = _this.formatter(price);

      // Trường hợp category là gì thì mới show sẩn phẩm đó
        html = `
                <div class="pro-loop current-product">
                <div class="product-block product-resize fixheight" 
                data-id="${id}" 
                data-category="${category}" 
                data-brand="${brand}"   
                data-name="${name}" 
                data-sku="${SKU}"
                data-price="${price}"
                data-inventory="${inventory}"
                data-size="${size}"
                data-color="${color}"
                data-description="${description}"
                style="height: 350px;">
                        <div class="product-image">
                            <div class="product-sale">
                                <span>-20%</span>
                            </div>
                            <div class="label-product">
                          
                            </div>
                            <a title="${name}" class="image-resize" style="height: 214px;">
                                <picture style="
                                cursor: pointer;">
                                    <img data-image="${image}" src="${image}" alt="${name}"/>
                                </picture>
                            </a>		
                        </div>

                        <div class="product-detail clear-fix">
                            <div class="box-pro-detail">
                                <div class="product-brand" >
                                    <a class="link" title="Show vendor" href="">${brand}</a>
                                    </div>
                                <h3 class="pro-name">
                                    <a href="#" title="${name}">
                                        ${name}
                                    </a>
                                </h3>
                                <div class="box-pro-prices">	
                                    <p class="pro-price highlight">${priceFormat}
                                        <span class="pro-price-del"><del class="compare-price">${priceFormat}</del></span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                `;
      // const labelProduct = document.querySelector('.label-product');         
                
      if (status === "new") {
        $(".new-list").append(html);
        $(".new-list .label-product").addClass('new');
      } else if (status === "sale") {
        $(".sale-list").append(html);
        $(".sale-list .label-product").addClass('sale');
      } else if (category === "Vali") {
        $(".vali-list").append(html);
      } else if (category === "Balo") {
        $(".balo-list").append(html);
      } else if (category === "Túi xách") {
        $(".tui-list").append(html);
      } else if (category === "Phụ kiện") {
        $(".phu-kien-list").append(html);
      }
    });
  },

  btnDetailProduct: function() {
    $('.owl-carousel').map(function() {
      $('.product-block .product-image a').click(function(){
        let id = $(this).parent().parent().data('id');
        let category = $(this).parent().parent().data('category');
        let image = $(this).children().children().data('image');
        let brand = $(this).parent().parent().data('brand');
        let name = $(this).parent().parent().data('name');
        let sku = $(this).parent().parent().data('sku');
        let price = $(this).parent().parent().data('price');
        let inventory = $(this).parent().parent().data('inventory');
        let size = $(this).parent().parent().data('size');
        let color = $(this).parent().parent().data('color');
        let description = $(this).parent().parent().data('description');

        localStorage.setItem('id', id);
        localStorage.setItem('category', category);
        localStorage.setItem('image', image);
        localStorage.setItem('brand', brand);
        localStorage.setItem('name', name);
        localStorage.setItem('sku', sku);
        localStorage.setItem('price', price);
        localStorage.setItem('inventory', inventory);
        localStorage.setItem('size', size);
        localStorage.setItem('color', color);
        localStorage.setItem('description', description);
        window.location = '/layout/detail.html';

      });
    })
  },

  searchProduct: function(){
    const _this = this;
    const search_bx2 = document.querySelector(".search_bx2");
    let html = '';
    window.addEventListener('load', function(){
      all_products.forEach(item => {
        const {image, name, price} = item;
        var formatPrice = _this.formatter(price);
        html += `
                <div class="item-search">
                    <div class="thumbs">
                      <a href="#">
                        <img src="${image}" alt="">
                      </a>
                    </div>
                    <div class="title2">
                      <a href="#" class="nameSearch">
                        ${name}
                      </a>
                      <div class="box-pro-prices">	
                              <p class="pro-price highlight"><strong>${formatPrice}</strong>
                                  <span class="pro-price-del"><del class="compare-price">${formatPrice}</del></span>
                              </p>
                        </div>
                    </div>
                </div>`
      })
      
      search_bx2.innerHTML = html;
      _this.btnDetailProduct();

    });

    // Click chuột ra ngoài thì sẽ ẩn thanh search:
    search.onblur = function() {
      search_bx2.style.visibility = 'hidden';
      search_bx2.style.opacity = 0;
    }

    // Nhập ký tự tìm kiếm:
    search.onkeyup = function() {
      let filter = search.value.toLowerCase();
      let a = document.querySelectorAll('.item-search');
      // console.log(filter, a);
      for (let i = 0; i < a.length; i++) {
        let b = a[i].querySelector('.title2');
        let c = b.getElementsByClassName('nameSearch')[0];
        // console.log(c);
        let textValue = c.textContent || c.innerText;
        if (textValue.toLowerCase().indexOf(filter) >-1){
          a[i].style.display = '';
          search_bx2.style.visibility = 'visible';
          search_bx2.style.opacity = 1;
        } else {
          a[i].style.display = 'none';
        }
        if (search.value == 0) {
           search_bx2.style.visibility = 'hidden';
           search_bx2.style.opacity = 0;
        }
      }
    };
  },

// Render Blogs
  renderBlogs: function() {
        let html = "";
        const blogsView = document.querySelector('.blogs-view');
            blogs.forEach(blog => {
            const {title, description, image} = blog;
                html += `
                <div class="col-md-4 col-sm-6 col-xs-12 col-post">
                    <div class="post_item">
                        <div class="post_featured">
                            <div class="post_thumb">
                                <a class="hover_icon">
                                    <picture>
                                        <img src="${image}" alt="">
                                    </picture>
                                </a>	
                            </div>
                        </div>
                    </div>
                    <div class="post_content">	
                        <h3 class="post_title">
                            <a href="" class="name-title">${title}</a>
                        </h3>
                        <div class="post_descr">   
                            <p>${description}</p>
                        </div>         
                    </div>
                </div>
                `
            })
        blogsView.innerHTML = html;
  },
  

  start: function() {
    this.renderProducts();
    this.btnDetailProduct();
    this.renderSlideMenu();
    this.renderLogo();
    this.searchProduct();
    this.renderBlogs();
    // this.sendEmailJs();
  },
};

app.start();
