#if RCT_NEW_ARCH_ENABLED
#import <React/RCTViewComponentView.h>
#import <QuartzCore/QuartzCore.h>

@interface SampleConicGradientClassicViewComponentView : RCTViewComponentView

@property(nonatomic, readonly, strong) CAGradientLayer * _Nonnull layer;

@end

#endif
