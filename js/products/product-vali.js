// Pascafe không có sản phẩm vali
import loadProducts from "../function/load_product.js";
// import {all_products} from "./all_products"

const vali = [
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
        "incart": 0,
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
        "incart": 0,
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
        "incart": 0,
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
        "incart": 0,
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
        "incart": 0,
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
        "incart": 0,
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
        "incart": 0,
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
        "incart": 0,
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
        "incart": 0,
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
        "incart": 0,
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
        "incart": 0,
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
        "incart": 0,
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
        "incart": 0,
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
        "incart": 0,
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
        "incart": 0,
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
        "incart": 0,
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
        "incart": 0,
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
        "incart": 0,
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
        "incart": 0,
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
        "incart": 0,
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
        "incart": 0,
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
        "incart": 0,
        "description": "Bộ sưu tập vali kéo nhựa Palisades 3-Z từ thương hiệu ace. (Nhật Bản) được trang bị hệ thống bánh xe đôi có độ êm tuyệt vời và đạt được sự cân bằng hoàn hảo giữa thiết kế và tính thực dụng.",
    },
]


loadProducts(vali);


