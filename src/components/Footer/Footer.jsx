import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <footer className="py-12 bg-gray-900 text-gray-200">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-8">
            {/* Column 1 */}
            <div className="flex flex-col">
              <h3 className="text-xl font-bold text-green-500 mb-4">Movie.org</h3>
              <p className="mb-2">Xem Phim Bộ Mới | Phim Thuyết Minh | Phim HD VietSub mới nhất được cập nhật liên tục.</p>
              <p>TraPhim.org - Xem phim không quảng cáo. Phim được thành viên tổng hợp từ nhiều nguồn trên internet với mục đích sưu tầm chia sẻ phi lợi nhuận.</p>
            </div>
            {/* Column 2 */}
            <div className="flex flex-col">
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a  className="hover:text-green-500 transition">Home</a></li>
                <li><a  className="hover:text-green-500 transition">About</a></li>
                <li><a  className="hover:text-green-500 transition">Guide</a></li>
                <li><a  className="hover:text-green-500 transition">Terms of Use</a></li>
              </ul>
            </div>
            {/* Column 3 */}
            <div className="flex flex-col">
              <h3 className="text-xl font-bold mb-4">Connect</h3>
              <ul className="space-y-2">
                <li>
                  <a  className="flex items-center space-x-2 hover:text-green-500 transition">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5" viewBox="0 0 16 16">
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                    </svg>
                    <span>Github</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="text-center mt-8">
          <p className="font-bold text-green-500 underline">Liên Hệ Tại: <a href="https://www.cgv.vn/home/" className="hover:text-green-500 transition">https://www.cgv.vn/home/</a></p>
        </div>
      </footer>
    );
  } 
}
