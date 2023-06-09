import loadProducts from "../function/load_product.js";


const phuKien = [
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
        "incart": 0,
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
        "incart": 0,
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
        "incart": 0,
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
        "incart": 0,
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
        "incart": 0,
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
        "incart": 0,
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
        "incart": 0,
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
        "incart": 0,
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
        "incart": 0,
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
        "incart": 0,
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
        "incart": 0,
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
        "incart": 0,
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
        "incart": 0,
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
        "incart": 0,
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
        "incart": 0,
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
        "incart": 0,
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
        "incart": 0,
        "description": "Bộ sưu tập ví da thông minh của ACE. TOKYO được trang bị chế độ vô hiệu RFID giúp bảo vệ việc thanh toán qua thẻ tín dụng (không chủ ý) và thông tin cá nhân trên hộ chiếu điện tử. Bằng cách bổ sung một lớp kim loại đặc biệt giữa hai lớp vải bên trong ví giúp chiếc ví của bạn thoát khỏi sự đánh cắp thông tin mật khi các tên trộm dùng thiết bị quét RFID lướt ngang qua bạn.",
    },
]

loadProducts(phuKien);


