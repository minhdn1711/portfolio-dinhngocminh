import FadeIn from "./components/FadeIn";
import BackToTop from "./components/BackToTop";

const profile = {
  name: "Đinh Ngọc Minh",
  role: "Backend Developer",
  title: "Backend Developer PHP Laravel",
  summary:
    "Backend Developer với khoảng 3 năm kinh nghiệm xây dựng RESTful API, hệ thống nghiệp vụ doanh nghiệp và các dịch vụ backend production sử dụng PHP Laravel,  tập trung vào thiết kế API rõ ràng, tối ưu cơ sở dữ liệu và đảm bảo độ tin cậy của hệ thống.",
  location: "Việt Nam",
  email: "minh.dn1711@gmail.com",
  github: "https://github.com/minhdn1711",
  linkedin: "https://linkedin.com/in/minh-dinh-ngoc",
  avatar: "/images/avt.jpg",
  availability: "Sẵn sàng cho vị trí Backend Developer / PHP Laravel Developer"
};

const coreStats = [
  { value: "3+", label: "Năm kinh nghiệm Backend" },
  { value: "REST", label: "Phát triển hệ thống RESTful API" },
  { value: "DB", label: "MySQL, SQL Server, Oracle, PostgreSQL" },
  { value: "MQ", label: "RabbitMQ & Redis" }
];

const expertise = [
  "PHP",
  "Laravel",
  "ReactJs",
  "RESTful API",
  "MySQL",
  "SQL Server",
  "Oracle",
  "PostgreSQL",
  "Redis",
  "RabbitMQ",
  "Git",
  "Linux VPS",
  "Windows Server IIS",
  "System Integration",
  "SMS Gateway",
  "Zalo ZNS",
  "Queue Jobs",
  "Caching"
];

const recruiterPoints = [
  "Kinh nghiệm xây dựng và vận hành backend cho hệ thống nghiệp vụ",
  "Làm việc với hệ thống thông báo, queue processing và tích hợp dịch vụ bên thứ ba",
  "Thành thạo cơ sở dữ liệu quan hệ và môi trường production",
  "Chuyển đổi yêu cầu nghiệp vụ thành API ổn định và dễ bảo trì"
];

const projects = [
  {
    title: "Hệ thống gửi thông báo khách hàng mua xe và bảo dưỡng",
    category: "Dự án tại công ty hiện tại",
    overview:
      "Xây dựng hệ thống tự động gửi thông báo cho khách hàng trong các kịch bản mua xe và nhắc lịch bảo dưỡng, giúp cửa hàng tự động hóa quy trình chăm sóc khách hàng.",
    impact: [
      "Giảm khối lượng công việc gửi thông báo thủ công tại cửa hàng",
      "Chuẩn hóa quy trình chăm sóc khách hàng theo các mốc dịch vụ",
      "Hỗ trợ xử lý gửi thông báo số lượng lớn thông qua hệ thống queue"
    ],
    responsibilities: [
      "Thiết kế và phát triển RESTful API bằng Laravel",
      "Tích hợp dịch vụ SMS và Zalo ZNS",
      "Sử dụng RabbitMQ cho xử lý tác vụ bất đồng bộ",
      "Sử dụng Redis cho caching và hỗ trợ xử lý queue",
      "Thiết kế và xử lý dữ liệu liên quan đến khách hàng, cửa hàng và thông báo"
    ],
    stack: ["PHP", "Laravel", "MySQL", "RabbitMQ", "Redis", "SMS", "ZNS"]
  },
  {
    title: "Hệ thống quản lý nghiệp vụ doanh nghiệp",
    category: "Phát triển hệ thống nội bộ",
    overview:
      "Phát triển các module backend cho hệ thống quản lý doanh nghiệp bao gồm quản lý khách hàng, xử lý giao dịch và các chức năng báo cáo.",
    impact: [
      "Cải thiện khả năng bảo trì hệ thống backend",
      "Tổ chức logic nghiệp vụ rõ ràng hơn",
      "Tối ưu cấu trúc dữ liệu và truy vấn database"
    ],
    responsibilities: [
      "Phát triển API backend cho hệ thống",
      "Xây dựng module xác thực và logic nghiệp vụ",
      "Thiết kế và tối ưu cấu trúc cơ sở dữ liệu",
      "Làm việc với SQL Server cho hệ thống dữ liệu doanh nghiệp"
    ],
    stack: ["PHP", "Laravel", "SQL Server", "RESTful API"]
  },
  {
    title: "Hệ thống xử lý tác vụ nền và tích hợp hệ thống",
    category: "Xử lý background job và tích hợp hệ thống",
    overview:
      "Xây dựng và duy trì hệ thống xử lý tác vụ nền cho các chức năng như gửi thông báo, xử lý batch job và đồng bộ dữ liệu.",
    impact: [
      "Giảm tải cho request chính của hệ thống",
      "Tăng độ ổn định cho các tác vụ xử lý nền",
      "Hỗ trợ cơ chế retry giúp hệ thống hoạt động ổn định hơn"
    ],
    responsibilities: [
      "Tích hợp RabbitMQ worker vào hệ thống",
      "Xây dựng cơ chế retry cho background job",
      "Sử dụng Redis cho caching và tối ưu truy cập dữ liệu",
      "Hỗ trợ vận hành các luồng xử lý dữ liệu bất đồng bộ"
    ],
    stack: ["Laravel", "RabbitMQ", "Redis", "Queue Worker"]
  }
];

const timeline = [
  {
    period: "Hiện tại",
    title: "Backend Developer",
    org: "Công ty hiện tại",
    description:
      "Phát triển backend cho hệ thống nghiệp vụ, tích hợp API, xây dựng hệ thống gửi thông báo và hỗ trợ triển khai hệ thống production."
  },
  {
    period: "Trước đó",
    title: "Backend Developer",
    org: "Các công ty trước",
    description:
      "Tham gia phát triển các module backend, xây dựng hệ thống nội bộ và xử lý logic dữ liệu cho các ứng dụng doanh nghiệp."
  }
];

const education = [
  {
    year: "2018 - 2022",
    degree: "Công nghệ thông tin",
    school: "Đại học Sư Phạm Kỹ Thuật Hưng Yên",
    description: "Chuyên ngành Kỹ thuật phần mềm"
  }
];

const strengths = [
  "Xây dựng hệ thống backend rõ ràng và dễ bảo trì",
  "Chuyển đổi yêu cầu nghiệp vụ thành API ổn định",
  "Thiết kế và tối ưu database quan hệ",
  "Tích hợp các dịch vụ bên thứ ba như SMS và ZNS",
  "Làm việc với hệ thống queue và môi trường production"
];

export default function HomePage() {
  return (
    <main className="siteShell">
      <FadeIn>
        <section className="heroSection section">
          <div className="container">
            <header className="topbar">
              <div className="brandBlock">
                <div className="brandDot" />
                <span>{profile.name}</span>
              </div>

              <nav className="navLinks">
                <a href="#about">Giới thiệu</a>
                <a href="#projects">Dự án</a>
                <a href="#experience">Kinh nghiệm</a>
                <a href="#education">Học vấn</a>
                <a href="#contact">Liên hệ</a>
              </nav>
            </header>

            <div className="heroGrid">
              <div className="heroCopy">
                <div className="heroContentWithAvatar">
                  <div style={{ position: 'relative' }}>
                    <div className="heroAvatarDecoration" />
                    {profile.avatar ? (
                      <img
                        src={profile.avatar}
                        alt={profile.name}
                        className="heroAvatar"
                      />
                    ) : (
                      <div className="heroAvatarWrapper">
                        {profile.name.split(' ').map(n => n[0]).join('')}
                      </div>
                    )}
                  </div>
                  <div>
                    <p className="eyebrow">{profile.title}</p>
                    <h1>
                      Backend Developer
                    </h1>
                  </div>
                </div>
                <p className="lead">{profile.summary}</p>

                <div className="ctaRow">
                  <a className="button primary" href="#projects">
                    Xem dự án
                  </a>
                  <a className="button ghost" href="#contact">
                    Liên hệ
                  </a>
                </div>
                <div className="metaRow">
                  <span>{profile.location}</span>
                  <span>{profile.availability}</span>
                </div>
              </div>

              <aside className="heroCard">
                <p className="cardEyebrow">Tổng quan</p>
                <h3>Tóm tắt năng lực Backend</h3>

                <ul className="cleanList">
                  {recruiterPoints.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </aside>
            </div>

            <div className="statsGrid">
              {coreStats.map((item) => (
                <article className="statCard" key={item.label}>
                  <div className="statValue">{item.value}</div>
                  <p>{item.label}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </FadeIn>
      <FadeIn>
        <section className="section" id="about">
          <div className="container narrow">
            <div className="sectionHeading">
              <p className="sectionTag">Giới thiệu</p>
              <h2>Tóm tắt chuyên môn</h2>
            </div>

            <div className="glassPanel">
              <p>
                Tôi chuyên về phát triển backend cho các hệ thống doanh nghiệp và hướng dịch vụ. Tập trung vào việc xây dựng cấu trúc API rõ ràng, logic kinh doanh ổn định, xử lý dữ liệu hiệu quả, và các luồng tích hợp hỗ trợ nhu cầu vận hành thực tế.
              </p>
              <p>
                Phù hợp với các dự án cần xây dựng kiến trúc backend, xử lý nghiệp vụ production, tích hợp third-party và phát triển logic phức tạp.
              </p>
              <p>
                Ngoài ra, tôi cũng có khả năng phát triển giao diện và tối ưu trải nghiệm người dùng.
              </p>
            </div>
          </div>
        </section>
      </FadeIn>
      <FadeIn>
        <section className="section">
          <div className="container">
            <div className="sectionHeading">
              <p className="sectionTag">Công nghệ</p>
              <h2>Công nghệ sử dụng</h2>
            </div>

            <div className="chipWrap">
              {expertise.map((item) => (
                <span className="chip" key={item}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>
      </FadeIn>
      <FadeIn>
        <section className="section" id="projects">
          <div className="container">
            <div className="sectionHeading">
              <p className="sectionTag">Dự án</p>
              <h2>Dự án tiêu biểu</h2>
            </div>

            <div className="projectStack">
              {projects.map((project) => (
                <article className="projectCard" key={project.title}>
                  <div className="projectHeader">
                    <p className="projectCategory">{project.category}</p>
                    <h3>{project.title}</h3>
                    <p className="projectOverview">{project.overview}</p>
                  </div>

                  <div className="projectColumns">
                    <div>
                      <h4>Thành quả dự án</h4>
                      <ul className="cleanList">
                        {project.impact.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4>Vai trò chính</h4>
                      <ul className="cleanList">
                        {project.responsibilities.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="chipWrap compact">
                    {project.stack.map((item) => (
                      <span className="chip" key={item}>
                        {item}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </FadeIn>
      <FadeIn>
        <section className="section" id="experience">
          <div className="container">
            <div className="sectionHeading">
              <p className="sectionTag">Kinh nghiệm</p>
              <h2>Kinh nghiệm làm việc</h2>
            </div>

            <div className="timeline">
              {timeline.map((item) => (
                <article className="timelineItem" key={`${item.period}-${item.org}`}>
                  <div className="timelineLeft">
                    <span className="timelinePeriod">{item.period}</span>
                  </div>
                  <div className="timelineRight">
                    <p className="timelineRole">{item.title}</p>
                    <h3>{item.org}</h3>
                    <p>{item.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </FadeIn>
      <FadeIn>
        <section className="section" id="education">
          <div className="container narrow">
            <div className="sectionHeading">
              <p className="sectionTag">Học vấn</p>
              <h2>Trình độ học vấn</h2>
            </div>

            <div className="projectStack">
              {education.map((item, index) => (
                <article className="educationItem" key={index}>
                  <p className="educationYear">{item.year}</p>
                  <h3 className="educationDegree">{item.degree}</h3>
                  <p className="educationSchool">{item.school}</p>
                  <p className="lead">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </FadeIn>
      <FadeIn>
        <section className="section">
          <div className="container gridTwo">
            <div className="glassPanel">
              <p className="sectionTag">Điểm mạnh</p>
              <h2>Giá trị tôi mang lại cho đội ngũ Backend</h2>
              <ul className="cleanList">
                {strengths.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="glassPanel">
              <p className="sectionTag">Phù hợp với</p>
              <h2>Vị trí hướng tới</h2>
              <ul className="cleanList">
                <li>Backend Developer</li>
                <li>PHP Developer</li>
                <li>Laravel Developer</li>
                <li>API Developer</li>
                <li>Backend Developer (Tích hợp hệ thống)</li>
              </ul>
            </div>
          </div>
        </section>
      </FadeIn>
      <FadeIn>
        <section className="section" id="contact">
          <div className="container">
            <div className="contactCard">
              <div>
                <p className="sectionTag">Liên hệ</p>
                <h2>Kết nối để trao đổi về cơ hội Backend</h2>
              </div>
              <div className="contactLinks">
                <a href={`mailto:${profile.email}`}>{profile.email}</a>
                <a href={profile.github} target="_blank" rel="noreferrer">
                  {profile.github.replace("https://", "")}
                </a>
                <a href={profile.linkedin} target="_blank" rel="noreferrer">
                  {profile.linkedin.replace("https://", "")}
                </a>
              </div>
            </div>
          </div>
        </section>
      </FadeIn>
      <BackToTop />
    </main>
  );
}
