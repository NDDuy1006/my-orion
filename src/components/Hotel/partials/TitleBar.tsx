import clsx from "clsx";
import styles from "../Hotel.module.scss"

export interface IProps {
  name: string;
  ratings: number;
  reviews: number;
}

const TitleBar = (props: IProps) => {
  const fixedRatings = Number(props.ratings.toFixed(0));
  console.log(fixedRatings);
  
  return (
    <div className="border-solid border-b-[1px] border-x-0 border-t-0 py-4">
      <div className="container flex justify-between">
        <div className="flex">
          <div className="mr-[20px]">
            <svg width="75" height="75" viewBox="0 0 75 75" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="75" height="75" rx="5" fill="black" />
              <path d="M49.9496 22H48.605C47.0687 22 45.7696 23.0358 45.3695 24.4458H43.6769C42.3283 24.4458 41.2311 25.5428 41.2311 26.8914C41.2311 28.2399 42.3283 29.3372 43.6769 29.3372H49.9496C51.8039 29.3372 53.3125 27.8286 53.3125 25.9743V25.3629C53.3125 23.5086 51.8039 22 49.9496 22Z" fill="white" />
              <path d="M29.1079 23.9537C28.771 22.8251 27.7237 22 26.4869 22H26.2698C25.0333 22 23.9859 22.8251 23.6491 23.9537C22.7043 24.2857 22.0248 25.1873 22.0248 26.2445V26.3333C22.0248 27.6719 23.1137 28.7607 24.4523 28.7607H28.3047C29.6432 28.7607 30.7321 27.6719 30.7321 26.3333V26.2445C30.7321 25.1876 30.0532 24.286 29.1079 23.9537Z" fill="white" />
              <path d="M47.3143 44.439L49.0014 42.5471L46.2851 35.5783L45.223 37.8173L43.5957 34.3867L42.2915 36.7628L44.4695 43.0801L47.3143 44.439Z" fill="white" />
              <path d="M34.4197 39.6945L37.8194 43.0147L40.8101 38.0934L38.4745 31.3191L37.3058 32.6554L34.229 26.4198L29.7173 35.4436L27.9604 34.9424L26.5158 39.7126L30.7517 42.3715L34.4197 39.6945Z" fill="white" />
              <path d="M53.3039 52V50.1658H51.9708L49.7489 44.4648L47.7665 46.6877L45.3085 45.5135L46.9125 50.1658H44.9724L41.587 40.3469L38.1887 45.939L34.2479 42.0906L30.8291 44.5859L25.9647 41.5323L23.35 50.1658H22V52H53.3039Z" fill="white" />
            </svg>
          </div>
          <div className="flex flex-col">
            <div className="py-2.5">
              <h2 className={clsx(styles.title, "font-[lora]")}>
                {props.name}
              </h2>
            </div>
            <div className="flex">
              {Array(fixedRatings).fill(<svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 0L12.2451 6.90983H19.5106L13.6327 11.1803L15.8779 18.0902L10 13.8197L4.12215 18.0902L6.36729 11.1803L0.489435 6.90983H7.75486L10 0Z" fill="#3A6EA5"/>
              </svg>)}
            </div>
          </div>
        </div>

        <div className="flex">
          <div className="mt-[30px] mr-4">
            <svg width="92" height="24" viewBox="0 0 92 24" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
              <rect width="92" height="24" fill="url(#pattern0)"/>
              <defs>
                <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use xlinkHref="#image0_75_746" transform="matrix(0.0100334 0 0 0.0384615 -0.00167224 0)"/>
                </pattern>
                <image id="image0_75_746" width="100" height="26" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAAAaCAYAAABByvnlAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABntJREFUeNrsWl1oHFUUvklXI41tNmq1pradlmqqpXairUItzS6CP9iaDVYEH+wu+KBS6AZ90KfNSh8EW7OR4pOw2/fqboiCIJJJUV+sOFG0La1kKvQH+sNqatGA1HOW76ZnLzvZmU2M/cmBye7OzL1z7/nO+c5376TpypUrat6uHYvwn6amputy8Pfu/CRGH3yoMwde6L9Gx2jRRxI/CzROry4gYnI2N8KnjQ7K0zwsCofwvd04PUqHS4czXVs/Gx3fmzhybrgbfcbEJYeO3tceG5V98vUMvvdfo3FjiTHyHOoDAhRHcK5HOGIDHSkfMNJ4UNS4pNuW6Z4sgZILMurDp/L9xy98uZPAsHxuiSHScjcyZTU3mIZ5+hgAGJxRcXI88147RzEiga8N4F5foxpmf/XrnvHDpwqZ3/86VQXGrQtuVx2LbLVxWbJyoN8bv4Ywr5HjepFeBUSj/m6CMSA4kYGYchIoqsQH3dePDErS97FamXLx8nhy+Gg6f3rCrTrPIKy/Z4ey2rfI097GZSn3pgAEziyJ8yWfzGBeT+NnnwTDNC6ydD9TXgKZUpIFjTIjefDnV/MXLp+oyoin799TAQR1aAic6+G3umkAQVFXmLymDs9QBbvF+SBc3gdAFLKqX9OUM/5eFRh3Llyjnl+bY1A4K7Ok/DyMyULGRum3W0+loB7qZ7KwqAukIU50u0D0iOfpMTJDuEHbiiDXddiNiGu6qGeFKsga6kVT1WCQh4EKS3AQi4V+AiNKxbt47PwXVWBs7xwoExi9HclPXWRU0mcCvUY2S6cWDWXG5yvqzE/xgVp3G+IkQ+cZ+JSfc+l6AnXUqnGNQekKAEYCY9aS2ImE1PzawtDHGACpRN+fk+cyX58ctCRNPbXm3XJLZFGcwGCn/YBJllHDRvHdBqh+zx6BU1PI8h7QawzXunzqYRr996Fv7mMnxlyke+Jmlon6qIXGkGjbHSIz8gKMVBVlBdTTOvLDqB1HD35v8ZfY0fOfpyf/uTR1sdt6q7y4pSNOFOXSIDUYLqLaM/qpR5NdIhMc6u8kotjmaJSZhQDTYJhOZ1FS1PWPrxtRnRF11BxTKSBF6gCaAiOs7LVmWrAeWhnJ/3j2YJWaWn1HLAswkoLDU/VqRa16ZdISnKXPmZG7W7SrlXVZvf5BndA2oB0fdI0VFIyG1yGN2OKFt6j7OsYsmR3rl77oEhg5sSBVKIqhFdU0Wav7so3zCZF5tfpzzcUuaEaDc6BBV+QxFhc0WVtlBTBXomxGI620k3e3PphZ3va4C5Xkysx6actKdez8h1XZYUWfkAPSDhuaoz0wbeP0Oyg72D7LhKCWEaJjsJbQCAOIZ0RMqRqQQh6KydrWuc8iNcV1oYztF/XsphY1Vr4qc1e1b/XoujOblNigOSHmPtMxammsdzEck5ojISiBeV531mMCwlsbBIritcVnx960d6z7eIRBIeWUYLpqXfzTVTYno0wypbPuu20u0aB5xUPcXp6OJQJYATSlxUvRVH9ha4h2YtIodOrRjmRf513PVL4zKLTws787foGLl7V57RIlt0d4S6TttmUln0iNzQEIjg99hcmmRsZ5ACDqQm5DejcMSEFESRGKoWJcnGOr3i7wIo+NF37NrcN29uWH1boVber0H1cBibYs52JuqqghMcjEHCRHSfB6YJYQ9JWZYUBoFZeW820O2ZEn0QUolgAl9dwD75c0KExhWx85oV55cqmS6mpJa6dTo++CEA75WqDIAJgFGxSyNl9HpprbQTpwirXGFGSceKEm52uFLepT6oIap6DHY1ApDlbUbZv6vrE+2vW6mliQqYBA1KU2r9hV1QetPcZ8uk+BVy2A7YrM2QDnxRuRxbWiFPPIg4ITyJqTYt1iI5JzxvxzWFQmMCbdrg0+4cDtDTCMXtQTve3T1dzgZAooRjk8PIYUTl+8NGm/sf+Mu63zg6mC9+1v+6v2rZTPWzM4ugtO8OCQDI6EqvO2rcF5xAFEFHt1GSFPvVrPpHZ9Pu3SCCavEcbhTG3if3KY6Tt1pCg7r6yjl3d0j5wbHjnk7atKX15/bF+ba4ckDrpmKM9GVoTYufXC7BSIdm4jr62lzQogfkZ9J74/XShyLdHGSiy++p3r878q5sAi/2XnBHSJQElN/H02r7fbF7Usnff6/wUIQCkQKN0ERBLS15l3+/S0MlfPsemI8Quqea/7278CDADx9+bBb4UsPgAAAABJRU5ErkJggg=="/>
              </defs>
            </svg>
          </div>
          <div className="flex flex-col py-2.5 mt-2">
            <div>
              <h3 className={clsx(styles.rating)}><span>{props.ratings}</span> / 5</h3>
            </div>
            <div className={clsx(styles.reviews)}>
              {props.reviews} reviews
            </div>
          </div>
        </div>

      </div>
    </div>
  )
};

export default TitleBar;

/*
<svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M10 0L12.2451 6.90983H19.5106L13.6327 11.1803L15.8779 18.0902L10 13.8197L4.12215 18.0902L6.36729 11.1803L0.489435 6.90983H7.75486L10 0Z" fill="#3A6EA5"/>
</svg>
*/