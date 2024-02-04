type Props = {
  featureTitle: string;
  featureDescription: string;
};

const FeatureCard = ({ featureTitle, featureDescription }: Props) => {
  return (
    <div className="FeatureCard__AdItem">
      <div className="FeatureCard__AdItem--title">{featureTitle}</div>
      <div className="FeatureCard__AdItem--description">
        {featureDescription}
      </div>
    </div>
  );
};

export default FeatureCard;
