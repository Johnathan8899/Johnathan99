// Traveler's choice không có sản phẩm balo
import loadProducts from "../function/load_product.js";


const balo = [
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
        "incart": 0,
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
        "incart": 0,
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
        "incart": 0,
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
        "incart": 0,
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
        "incart": 0,
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
        "incart": 0,
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
        "incart": 0,
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
        "incart": 0,
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
        "incart": 0,
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
        "incart": 0,
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
        "incart": 0,
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
        "incart": 0,
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
        "incart": 0,
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
        "incart": 0,
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
        "incart": 0,
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
        "incart": 0,
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
        "incart": 0,
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
        "incart": 0,
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
        "incart": 0,
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
        "incart": 0,
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
        "incart": 0,
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
        "incart": 0,
        "description": "Bộ sưu tập ace. Biena2 là dòng sản phẩm 'Work Style Beauties Series', một chiếc túi công sở thanh lịch, tinh tế dành cho các nữ doanh nhân thành đạt.",
    },
]

loadProducts(balo);