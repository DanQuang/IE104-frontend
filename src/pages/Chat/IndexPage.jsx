import React from 'react'
import { StackIcon } from '@radix-ui/react-icons'

const IndexPage = () => {
    return (
        <div className='h-full flex flex-col items-center justify-evenly'> 
            <div className='flex flex-col items-center'>
                <StackIcon className='w-20 h-20 animate-pulse' />
                <p className='text-2xl font-bold'>Welcome to Vietnamese Law AI Chatbot!</p>
            </div>

            <div className='flex flex-col sm:flex-row gap-3 text-center mx-auto p-2'>
                <div className='border border-foreground/15 rounded-lg p-3 max-w-96'>
                    <h2 className='text-2xl mb-2 font-bold'>Quyền lợi của người lao động khi nghỉ việc là gì?</h2>
                    <p>Người lao động có quyền nhận trợ cấp thất nghiệp, trợ cấp thôi việc (nếu có), và bảo hiểm xã hội theo quy định của pháp luật. Thời gian thông báo nghỉ việc và các điều khoản trong hợp đồng lao động cũng cần được tuân thủ.</p>
                </div>                             
                <div className='border border-foreground/15 rounded-lg p-3 max-w-96'>
                    <h2 className='text-2xl mb-2'>Thời gian thử việc tối đa là bao lâu theo luật Việt Nam?</h2>
                    <p>Thời gian thử việc tối đa theo luật lao động Việt Nam là 60 ngày đối với công việc yêu cầu trình độ chuyên môn kỹ thuật từ cao đẳng trở lên, và 30 ngày đối với các công việc khác.</p>
                </div>
            </div>            
        </div>
    )
}
export default IndexPage
