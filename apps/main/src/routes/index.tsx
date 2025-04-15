import { createFileRoute } from '@tanstack/react-router'
import { Card, Typography, Divider, Button, Space, Row, Col } from 'antd'
import { GithubOutlined, CloudOutlined, CodeOutlined, AppstoreOutlined } from '@ant-design/icons'

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  const { Title, Paragraph, Text, Link } = Typography;
  
  return (
    <div className="py-8 px-6">
      <Typography>
        <Title level={2} className="mb-6 text-center">无界微前端演示项目</Title>
        
        <Row gutter={[24, 24]} className="mb-8">
          <Col xs={24} md={12}>
            <Card 
              title={<Space><CloudOutlined /> 部署信息</Space>} 
              className="h-full shadow-sm hover:shadow-md transition-shadow"
            >
              <Paragraph>
                本项目使用赛博善人 <Text strong>Vercel</Text> 进行免费静态部署，国内网络访问可能受到一定影响。后端项目计划构建Docker镜像并发布至Docker Hub，本地通过docker-compose部署提供本地服务。
              </Paragraph>
            </Card>
          </Col>
          
          <Col xs={24} md={12}>
            <Card 
              title={<Space><CodeOutlined /> 项目架构</Space>} 
              className="h-full shadow-sm hover:shadow-md transition-shadow"
            >
              <Paragraph>
                项目采用<Text strong>PNPM Workspace</Text>管理依赖，使用<Text strong>无界微前端</Text>技术实现应用集成。
              </Paragraph>
              <Paragraph>
                <Text type="secondary">注：实际微前端项目不建议将所有代码放在同一仓库，因为微前端本身就是为了解决巨石应用问题而设计的。本项目采用单仓纯粹是为了偷懒</Text>
                <Text className='block' type="secondary">注：无界在 Next.js 作为子应用的时候会加载不出来，<a href="https://github.com/Tencent/wujie/issues/894" target="_blank" rel="noopener noreferrer">issue</a>，顾这边这边 next 项目先用 iframe 代替</Text>
              </Paragraph>
            </Card>
          </Col>
        </Row>
        
        <Card 
          title={<Space><AppstoreOutlined /> 使用说明</Space>} 
          className="mb-8 shadow-sm hover:shadow-md transition-shadow"
        >
          <Paragraph>
            通过侧边栏可以切换到不同的微前端子应用，每个子应用均为独立部署，可独立运行。
          </Paragraph>
          <Paragraph>
            当前项目展示了React、Vue3、Next.js、Nuxt等不同技术栈的应用如何在同一框架下协同工作。
          </Paragraph>
          <Paragraph>
            根据心情持续更新中...
          </Paragraph>
        </Card>
        
        <Divider />
        
        <Space direction="vertical" className="w-full">
          <Space align="center" className="w-full justify-center">
            <Button type="primary" icon={<GithubOutlined />} href="https://github.com/lijiayuan365/interview-frontend" target="_blank">
              前端项目仓库
            </Button>
            <Button type="primary" icon={<GithubOutlined />} href="https://github.com/lijiayuan365/interview-backend" target="_blank">
              后端项目仓库
            </Button>
          </Space>
        </Space>
      </Typography>
    </div>
  )
}
