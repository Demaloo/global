import ContentSlice from "../slices/content";
import ImageSlice from "../slices/image";

const SliceMachine = ({ slices }) => {
	return slices.map((slice, index) => {
		if (!slice) return null;
		switch (slice.slice_type) {
			case "text":
				return <ContentSlice key={index} slice={slice} />;
			case "image":
				return <ImageSlice key={index} slice={slice} />;
			default:
				return null;
		}
	});
};

//   case 'code':
//     return <Code key={index} data={slice} />
//   case 'embed':
//     return <Embed key={index} data={slice} />
//   case 'image':
//     if (slice.primary.type === 'Banner') {
//       return <Banner key={index} image={slice.items[0].image} />
//     } else {
//       return <Gallery key={index} data={slice} />
//     }
//   case 'meta_information':
//     return <MetaInfo key={index} meta={slice.primary} />
//   case 'alert':
//     return <Alert key={index} data={slice} />

export default SliceMachine;
