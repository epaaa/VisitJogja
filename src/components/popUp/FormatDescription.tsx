

export default function FormatDescription({ desc }: { desc: string }) {
    function formatDesc(desc: string) {
      const formattedDesc = desc.replace(/~+/g, match => '\n'.repeat(match.length));
      const parts = formattedDesc.split('\n')
      const finalPart = parts.map(item => item.replace(/^$/, '.'))
  
      return (
        <>
          {finalPart.map((part, index) => (
            part === '.' ? <br key={index}/> : <div key={index}>{part}</div>
          ))}
        </>
      )
    }
  
    return <>{formatDesc(desc)}</>
  }